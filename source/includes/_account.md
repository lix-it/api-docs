# LinkedIn Account API

## Connections

This endpoint retrieves the connections for the viewer_id.

<aside class="notice">
In order to retrieve connections for your account you need to have your LinkedIn account connected to your Lix account using the Lix extension. 

[Instructions on how to do that here](https://help.lix-it.com/en/articles/6784916-how-to-install-the-lix-extension).
</aside>


### HTTP Request

`GET https://api.lix-it.com/v1/connections`

### URL Parameters

Parameter | Description
--------- | -----------
viewer_id | The Lix viewer id of the account you want to get the connections from.
count     | Set as high a number as you can here - 1,000 works.
start     | The start offset for the search paging.
include_profile_pictures | Optional. Set to `false` to omit the `profile_picture` field (signed image URLs) from each connection, roughly halving the response size. Defaults to `true`.


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
    "paging": { "count": 10, "start": 0, "total": 247 }
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
  "cookies": [
    {"key": "li_at", "value": "AQEDAT8AAQD"},
  ]}'
```

```python
import requests
import json
url = "https://api.lix-it.com/v1/account/linkedin/account"
payload = json.dumps({
  "cookies": {
    { "key": "li_at", "value": "AQEDAT8AAQD" },
  }
})
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

## Get LinkedIn Account

This endpoint retrieves LinkedIn accounts attached to your team. The account must be shared with you (see [LinkedIn account sharing](#linkedin-account-sharing)); otherwise the request fails with `401` and `viewer_invalid`.

### HTTP Request

`GET https://api.lix-it.com/v1/account/linkedin/account`

### Query Parameters

Parameter | Description
--------- | -----------
viewer_id   | The LinkedIn account ID to retrieve.

```shell
curl -X GET "https://api.lix-it.com/v1/account/linkedin/account?viewer_id=alfie-lambert" \
  -H "Authorization: lixApiKey"
```

```python
import requests
import json
url = "https://api.lix-it.com/v1/account/linkedin/account"
headers = {
  'Authorization': lix_api_key
}
response = requests.request("GET", url, headers=headers)
print(response.json())
```

> The above command returns JSON structured like this:
```json
{
  "viewerId": "alfie-lambert",
  "linkedInReady": true,
  "salesNavigatorReady": false,
  "warmup": {
    "status": "warming",
    "details": {
      "consecutiveActiveDays": 2,
      "dailyAvailable": 100,
      "hourlyAvailable": 40,
      "dailyTotal": 500,
      "hourlyTotal": 100
    }
  }
}
```

The `warmup` object is only present when the account warmup feature is enabled for the account. When warmup is complete the `status` field becomes `"completed"` and the `consecutiveActiveDays` and `dailyAvailable`/`hourlyAvailable` fields reach their `dailyTotal`/`hourlyTotal` values.

## List LinkedIn Accounts

This endpoint retrieves the connected account statuses for the LinkedIn accounts attached to your team **that are shared with you** (see [LinkedIn account sharing](#linkedin-account-sharing)). Results are ordered by the account ID in the database and returned in pages of 5. The warmup status for each account is fetched in parallel.

Each account includes a `sharing` field with its effective sharing mode: `"team"` when any team member may use it, `"connector"` when only the connector, explicitly granted users, and the team owner may use it.

### HTTP Request

`GET https://api.lix-it.com/v1/account/linkedin/accounts`

### Query Parameters

Parameter | Description
--------- | -----------
page      | Optional. The page number to retrieve, starting from 1. Defaults to 1. Each page contains up to 5 accounts.

```shell
curl -X GET "https://api.lix-it.com/v1/account/linkedin/accounts?page=1" \
  -H "Authorization: lixApiKey"
```

```python
import requests
url = "https://api.lix-it.com/v1/account/linkedin/accounts?page=1"
headers = {
  'Authorization': lix_api_key
}
response = requests.request("GET", url, headers=headers)
print(response.json())
```

> The above command returns JSON structured like this:
```json
[
  {
    "viewerId": "alfie-lambert",
    "linkedInReady": true,
    "salesNavigatorReady": false,
    "sharing": "team",
    "warmup": {
      "status": "warming",
      "details": {
        "consecutiveActiveDays": 2,
        "dailyAvailable": 100,
        "hourlyAvailable": 40,
        "dailyTotal": 500,
        "hourlyTotal": 100
      }
    }
  }
]
```

The `warmup` object is only present when the account warmup feature is enabled for the account. When warmup is complete the `status` field becomes `"completed"` and the `consecutiveActiveDays` and `dailyAvailable`/`hourlyAvailable` fields reach their `dailyTotal`/`hourlyTotal` values.

## LinkedIn account sharing

Teams control which members may act as a given LinkedIn account (`viewer_id`) through the API and MCP:

- **Team default** — each team has a `li_account_sharing` setting: `"team"` (every member may use every team account, the default) or `"connector"` (members may only use accounts they connected themselves, plus accounts they have been granted).
- **Per-account override** — an account's `sharing` may be `"team"` or `"connector"` to override the team default, or `"inherit"` to follow it.
- **Grants** — individual members can be granted access to specific accounts.
- The **team owner** may always use every team account, and the **connector** (the member who connected the account) may always use their own accounts.

If you pass a `viewer_id` you may not use, the request fails with `401` and error type `viewer_invalid` with the message `viewer is not shared with you; ask the account owner or your team owner`. The API never falls back to another account.
