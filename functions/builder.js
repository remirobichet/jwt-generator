const jwt = require('jwt-simple');

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 404
    }
  }
  if (!event.body) {
    return {
      statusCode: 400,
      body: `Missing body`
    }
  }
  const body = JSON.parse(event.body)
  if (!body.payload) {
    return {
      statusCode: 400,
      body: `Missing body payload`
    }
  }
  if (!body.signatureKey) {
    return {
      statusCode: 400,
      body: `Missing body signature key`
    }
  }
  const payload = body.payload
  const signatureKey = body.signatureKey
  const alg = event.body.algorithm || 'HS256'
  const response = jwt.encode(payload, signatureKey, alg)
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ jwt : response })
  }
}