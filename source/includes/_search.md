# Search API

## Person IDs

This endpoint retrieves ids for various B2B data products. You query it using an ID and it will fetch the ids.

You can use this endpoint to convert LinkedIn Sales Navigator profile URLs to LinkedIn profile URLs and vice versa.

### The PersonIDs Object

Attribute | Description
--------- | -----------
liFlagshipID | The ID of the 'Flagship' LinkedIn profile. You can create a profile URL by passing in `https://www.linkedin.com/in/[liFlagshipID]`.
salesNavID     | The Sales Navigator ID. You can create a profile URL by passing in `https://www.linkedin.com/sales/people/[salesNavID],NAME,undefined`.
lixID     | The unique Lix ID for this person.

```shell
{
  "flagshipID": "alfie-lambert",
  "salesNavID": "ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg",
  "lixID": "cGVyc29uOjk3MDgyNQ=="
}
```

### Get PersonIDs

Retrieve the Person IDs. Pass in any ID you would like to cross-reference, but only pass one in. 

<aside class="notice"> Uses 1 Search Credit.</aside>

`GET https://api.lix-it.com/v1/person/ids`

Parameter | Description
--------- | -----------
sales_nav_id | The Sales Nav ID of the person. You can find this from a profile link: `https://www.linkedin.com/sales/person/[sales_nav_id],NAME,XXXX`
li_flagship_id | The Linkedin profile public identifier. You can find this from a profile link: `https://www.linkedin.com/in/[li_flagship_id]`
lix_id | The Lix unique ID.

```shell
curl "https://api.lix-it.com/v1/person/ids?li_flagship_id=alfie-lambert" \
  -H "Authorization: [lixApiKey]"
```

> Returns:

```json
{
 "person_ids": {
  "liFlagshipID": "alfie-lambert",
  "salesNavID": "ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg",
  "lixID": "cGVyc29uOjk3MDgyNQ=="
 }
}
```

## Connections

This endpoint retrieves the connections for the viewerId.

<aside class="notice">
You need to have your LinkedIn account connected to your Lix account using the Lix extension. You will get 400 Bad Request errors otherwise.
</aside>

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