# Lix Account API

## Balances

Retrieve the current balance of your account. Returns the number of email credits and LinkedIn credits available.

### HTTP Request

`GET https://api.lix-it.com/v1/account/balances`


```shell
curl "https://api.lix-it.com/v1/account/balances" \
  -H "Authorization: lixApiKey"
```

```python
import requests
url = "https://api.lix-it.com/v1/account/balances"
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
  "emailBalance": 10000,
  "linkedInBalance": 50000
}
```