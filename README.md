## REST API Client

This repository contains example client scripts for Jungle's
REST API. They rely on an auto-generated SDK that's presently
stored in the `generated/` subfolder.

## SDK

The SDK is generated automatically as follows:

```
npx openapi --input https://rest.ape.cafe/api/2023-05/openapi.json --client axios --output ./generated
```
# jungle-sample-rest-api-client
