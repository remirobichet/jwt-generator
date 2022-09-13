# JWT generator

> ♻️ Generate signed JWT over HTTP

## Usage

With curl 

```bash
curl -H "Accept: application/json" -X POST https://jwt-generate.netlify.app/.netlify/functions/builder -d '{ "payload": { "role": "guest", "email": "remi@example.com" }, "signatureKey": "MyS1gN3dK3y" }'
```