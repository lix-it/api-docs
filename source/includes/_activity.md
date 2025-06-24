# Activity API
Get the full activity of a LinkedIn user.

## Get Posts
Get the posts history of a LinkedIn user. 

Retrieves up to 50 results per page. 

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/person/li/activity/posts`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
sales_nav_id | The Sales Navigator ID of the user whose activity you want to retrieve. You can obtain this from the Person IDs disambiguation endpoint at `/v1/person/ids`

#### Optional Parameters
Parameter | Description
--------- | -----------
start            | The start index of the posts to return. The default value is 0.
viewer_id | The LinkedIn ID of the account you would like to view this search as

```shell
curl "https://api.lix-it.com/v1/person/li/activity/posts?sales_nav_id=ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg&start=0" \
  -H "Authorization: lixApiKey"
```

```python
import requests


url = "https://api.lix-it.com/v1/person/li/activity/posts?sales_nav_id=ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg&start=0"

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
    "posts": [ Post ],
    "paging": { "count": 25, "start": 0, "total": 2500 },
}
```

## Get Comments

Get the comment history of a LinkedIn user.

Retrieves up to 50 comments per page.

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/person/li/activity/comments`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
sales_nav_id | The Sales Navigator ID of the user whose activity you want to retrieve. You can obtain this from the Person IDs disambiguation endpoint at `/v1/person/ids`

#### Optional Parameters

Parameter | Description
--------- | -----------
start            | The start index of the comments to return. The default value is 0.
viewer_id | The LinkedIn ID of the account you would like to view this search as

```shell
curl "https://api.lix-it.com/v1/person/li/activity/comments?sales_nav_id=ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg&start=0" \
  -H "Authorization: lixApiKey"
```

```python
import requests


url = "https://api.lix-it.com/v1/person/li/activity/comments?sales_nav_id=ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg&start=0"

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
    "comments": [ Comment ],
    "paging": { "count": 25, "start": 0, "total": 2500 },
}
```
