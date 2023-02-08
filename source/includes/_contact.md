# Contact Information API

## Email from LinkedIn profile

Retrieve Validated Email address for any LinkedIn user.

<aside class="notice"> Uses 1 Email Credit.</aside>

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
print(response.text)
```

> The above command returns JSON structured like this:
```json
{
  "email": "*****@lix-it.com",
  "status": "VALID",
  "alternatives": ["*****@lix-it.com"]
}
```