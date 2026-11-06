# LinkedIn Network API

## Send Connection

This endpoint sends a LinkedIn connection request with an optional note from a standard LinkedIn account.

<aside class="notice">
Uses 1 Standard Credit.
</aside>

<aside class="warning">
Weekly send limits apply to each LinkedIn account:

- **Sales Navigator accounts:** 100 connection requests per week
- **Standard LinkedIn accounts:** 50 connection requests per week

The limit is reset at 00:00 UTC on Monday. If the limit is exceeded the API returns `429 Too Many Requests` with a `Retry-After` header.
</aside>

```python
import requests
import json

url = "https://api.lix-it.com/v1/connections/send"

payload = json.dumps({
  "viewer_id": "ACoAACABCDEF1234567",
  "profile_link": "https://www.linkedin.com/in/jane-doe-example",
  "message": "I would like to add you to my professional network."
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': lix_api_key
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.json())
```

```shell
curl --request POST \
  --url 'https://api.lix-it.com/v1/connections/send' \
  --header 'Authorization: lixApiKey' \
  --header 'Content-Type: application/json' \
  --data '{"viewer_id":"ACoAACABCDEF1234567","profile_link":"https://www.linkedin.com/in/jane-doe-example","message":"I would like to add you to my professional network."}'
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "entity_urn": "urn:li:fsd_invitation:1234567890123456789"
}
```

If the weekly send limit is reached, the API returns:

```json
{
  "error": {
    "type": "rate_limit",
    "message": "weekly connection request limit reached"
  }
}
```

### HTTP Request

`POST https://api.lix-it.com/v1/connections/send`

### Body Parameters

Parameter | Required | Description
--------- | -------- | -----------
viewer_id | true | The Lix viewer id of the account you would like to send the connection request from
profile_link | true* | The LinkedIn profile URL of the person you would like to connect with
profile_id | true* | The public identifier of the person you would like to connect with (e.g., "jane-doe-example"). Either profile_link or profile_id must be provided.
message | false | A personalised note to send with the connection request. Maximum 300 characters.

## Get Connection Request Remaining

This endpoint returns the number of LinkedIn connection requests an account can still send in the current calendar week, when the weekly limit will reset.

<aside class="warning">
Weekly send limits apply to each LinkedIn account:

- **Sales Navigator accounts:** 100 connection requests per week
- **Standard LinkedIn accounts:** 50 connection requests per week

The limit resets at 00:00 UTC on Monday.
</aside>

```python
import requests

url = "https://api.lix-it.com/v1/account/connections/remaining?viewer_id=ACoAACABCDEF1234567"

headers = {
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers)

print(response.json())
```

```shell
curl "https://api.lix-it.com/v1/account/connections/remaining?viewer_id=ACoAACABCDEF1234567" \
  -H "Authorization: lixApiKey"
```

> The above command returns JSON structured like this:

```json
{
  "viewerId": "ACoAACABCDEF1234567",
  "weeklyLimit": 50,
  "used": 12,
  "remaining": 38,
  "nextRefresh": "2026-08-24T00:00:00Z"
}
```

### HTTP Request

`GET https://api.lix-it.com/v1/account/connections/remaining`

### URL Parameters

#### Required parameters

Parameter | Description
--------- | -----------
viewer_id | The Lix viewer id of the account you would like to check

## Get Invitations

This endpoint lists pending LinkedIn connection invitations for a standard LinkedIn account — invitations the account has received and not yet actioned (`direction=received`), and invitations it has sent that are still pending (`direction=sent`).

<aside class="notice">
Uses 1 Standard Credit.
</aside>

```python
import requests

url = "https://api.lix-it.com/v1/li/invitations?viewer_id=ACoAACABCDEF1234567&direction=received&count=20"

headers = {
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers)

print(response.json())
```

```shell
curl "https://api.lix-it.com/v1/li/invitations?viewer_id=ACoAACABCDEF1234567&direction=received&count=20" \
  -H "Authorization: lixApiKey"
```

> The above command returns JSON structured like this:

```json
{
  "invitations": [
    {
      "invitationUrn": "urn:li:invitation:7560000000000000001",
      "name": "Jane Doe",
      "headline": "Machine Learning Engineer at Example Co",
      "profileUrl": "https://www.linkedin.com/in/jane-doe-example/",
      "publicIdentifier": "jane-doe-example",
      "memberUrn": "urn:li:fsd_profile:ACoAABEXAMPLE000000000000000000000001",
      "message": "Hi, I'd love to connect and hear more about your work.",
      "sentTimeText": ""
    },
    {
      "invitationUrn": "urn:li:invitation:7560000000000000002",
      "name": "John Smith",
      "headline": "Sales Director at Example Inc",
      "profileUrl": "https://www.linkedin.com/in/john-smith-example/",
      "publicIdentifier": "john-smith-example",
      "memberUrn": "urn:li:fsd_profile:ACoAABEXAMPLE000000000000000000000002",
      "message": "",
      "sentTimeText": ""
    }
  ],
  "total": "46"
}
```

### HTTP Request

`GET https://api.lix-it.com/v1/li/invitations`

### URL Parameters

#### Required parameters

Parameter | Description
--------- | -----------
viewer_id | The Lix viewer id of the account you would like to list invitations for

#### Optional parameters

Parameter | Default | Description
--------- | ------- | -----------
direction | received | `received` for invitations awaiting the account's response, or `sent` for invitations the account sent that are still pending
count | 20 | Maximum number of invitations to return
start | 0 | Zero-based offset into the invitation list, in LinkedIn's display order

### Response fields

`total` is the total number of pending invitations in the requested direction, as reported by LinkedIn (returned as a string).

Each invitation object contains:

Field | Description
----- | -----------
invitationUrn | The invitation's URN, e.g. `urn:li:invitation:7560000000000000001`
name | The other member's display name — the inviter for received invitations, the invitee for sent ones
headline | The member's headline as shown on the invitation card
profileUrl | The member's canonical LinkedIn profile URL
publicIdentifier | The member's public identifier (vanity name)
memberUrn | The member's `urn:li:fsd_profile` URN
message | The custom message attached to the invitation, when present. Empty when no message was attached
sentTimeText | Relative timestamp rendered by LinkedIn, e.g. `Sent 15 minutes ago`. Only populated for sent invitations — LinkedIn does not display a timestamp on received ones
