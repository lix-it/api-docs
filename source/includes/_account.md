# LinkedIn Account API

## Connections

This endpoint retrieves the connections for the viewerId.

<aside class="notice">
You need to have your LinkedIn account connected to your Lix account using the Lix extension. You will get 400 Bad Request errors otherwise.
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
print(response.text)
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