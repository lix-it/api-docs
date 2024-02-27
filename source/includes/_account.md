# LinkedIn Account API

## Connections

This endpoint retrieves the connections for the viewerId.

<aside class="notice">
In order to retrieve connections for your account you need to have your LinkedIn account connected to your Lix account using the Lix extension. 

[Instructions on how to do that here](https://help.lix-it.com/en/articles/6784916-how-to-install-the-lix-extension).
</aside>


### HTTP Request

`GET https://api.lix-it.com/v1/connections`

### URL Parameters

Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you want to get the connections from.
count     | Set as high a number as you can here - 1,000 works.
start     | The start offset for the search paging.


```shell
curl "https://api.lix-it.com/v1/connections?viewer_id=alfie-lambert&count=1000&start=10" \
  -H "Authorization: lixApiKey"
```

```python
import requests
url = "https://api.lix-it.com/v1/connections?count=1000&start=0&viewer_id=alfie-lambert"
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
  "connections_response": {
    "elements": [ Connection ],
    "paging": { "count": 10 }
  }
}
```

## Put LinkedIn Account

This endpoint adds/updates the credentials for the LinkedIn account.

If a LinkedIn account is not currently attached to your team it will attach the account to the team.

If the LinkedIn account is already attached to the team it will update the credentials for the account.

If the tokens provided are not valid it will send a status 400 with a message.

### HTTP Request

`PUT https://api.lix-it.com/v1/account/linkedin/account`

### Body Parameters

Parameter | Description
--------- | -----------
cookies   | The cookies for the LinkedIn account as a JSON array with the key as the cookie name and the value as the value. All cookies under the `.www.linkedin.com` domain.

```shell
curl -X PUT "https://api.lix-it.com/v1/account/linkedin/account" \
  -H "Authorization: lixApiKey
  -d '{
  "cookies": {
    {"key": "li_at", "value": "AQEDAT8AAQD"},
  }'
```

```python
import requests
url = "https://api.lix-it.com/v1/account/linkedin/account"
payload = {
  "cookies": {
    { "key": "li_at", "value": "AQEDAT8AAQD" },
  }
}
headers = {
  'Authorization': lix_api_key
}
response = requests.request("PUT", url, headers=headers, data=payload)
print(response.json())
```

> The above command returns JSON structured like this:
```json
{
  "viewer_id": "alfie-lambert"
}
```
