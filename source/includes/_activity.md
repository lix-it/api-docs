# LinkedIn Actvitiy API

## Person Activity

This endpoint retrieves the activity for a person.

### HTTP Request

`GET https://api.lix-it.com/v1/activity/person`

### URL Parameters

Parameter | Description
--------- | -----------
profile_link | The LinkedIn profile link for the person you want to get the activity from.
type | The type of activity you want to get. Options are: `posts`, `comments`, `articles`.
count     | The number of activities you want to get. Default: 20, Max: 100.
start     | The start offset for the search paging.


```shell
curl "https://api.lix-it.com/v1/activity/person" \
  -H "Authorization: lixApiKey"
```

```python
import requests
url = "https://api.lix-it.com/v1/activity/person"
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
