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
viewer_id | true | The LinkedIn ID of the account you would like to send the connection request from
profile_link | true* | The LinkedIn profile URL of the person you would like to connect with
profile_id | true* | The public identifier of the person you would like to connect with (e.g., "jane-doe-example"). Either profile_link or profile_id must be provided.
message | false | A personalised note to send with the connection request. Maximum 300 characters.
