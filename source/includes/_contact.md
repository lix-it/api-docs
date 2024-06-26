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