# Contact Information API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5140183-5c44eafd-a5a9-4326-b2a9-e811426b4d07?action=collection%2Ffork&collection-url=entityId%3D5140183-5c44eafd-a5a9-4326-b2a9-e811426b4d07%26entityType%3Dcollection%26workspaceId%3Dcc78921f-4152-4fc0-9c2f-75ef5c7a5895)

## Email from LinkedIn profile

Retrieve a Validated Email address for any LinkedIn user. 

The contact API runs one validation check on the email address and returns the result. If the email address is valid, it will be returned in the response. If the email address is Probable, the response will contain a list of alternative email addresses.

<aside class="notice"> Uses 1 Email Credit.</aside>

A credit is only deducted if the email address is Valid. You can re-run the validation check on the email address multiple times until you receive a Valid response. We recommend doing this 5-10 times if the email is Probable.

### HTTP Request

`GET https://api.lix-it.com/v1/contact/email/by-linkedin`

### URL Parameters

#### Required parameters

Parameter | Description
--------- | -----------
url       | The url-encoded URL of the LinkedIn profile you would like to get an email address for.


```shell
curl "https://api.lix-it.com/v1/contact/email/by-linkedin?url=https://www.linkedin.com/in/alfie-lambert" \
  -H "Authorization: lixApiKey"
```

```python
import requests
url = "https://api.lix-it.com/v1/contact/email/by-linkedin?url=https://www.linkedin.com/in/alfie-lambert"
payload={}
headers = {
  'Authorization': lix_api_key
}
response = requests.request("GET", url, headers=headers, data=payload)
print(response.json())
```

> The above command returns JSON structured like this:
```json
{
  "email": "*****@lix-it.com",
  "status": "VALID",
  "alternatives": ["*****@lix-it.com"]
}
```

### Response status

`status` | Description
-------- | -----------
VALID    | The email address passed validation. `email` contains the address.
RISKY    | An email address was found but could not be fully validated. `email` contains the best guess and `alternatives` may contain other candidates.
UNKNOWN  | No email address could be found for this profile. `email` is empty and `alternatives` is an empty list.

A profile with no email address is not an error. The API returns `200` with `status` set to `UNKNOWN`:

> No email found:

```json
{
  "email": "",
  "status": "UNKNOWN",
  "alternatives": []
}
```

### Errors

Errors return a JSON body with an error `type`, a `message` and a `traceId`. Include the `traceId` when contacting support about a failed request.

> Profile not found:

```json
{
  "error": {
    "type": "not_found",
    "message": "profile not found"
  },
  "traceId": "11d1ce488f16efb4"
}
```

HTTP Code | `type` | Description
--------- | ------ | -----------
400 | params_invalid | `url` is missing or is not a valid LinkedIn profile URL.
400 | viewer_invalid | LinkedIn refused the request. Check the URL is valid.
404 | not_found | The LinkedIn profile does not exist.
500 | api_error | Internal error. Retry the request, and contact support with the `traceId` if it persists.
503 | queued | The lookup has been queued. Retry the request in a few minutes.
