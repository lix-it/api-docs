# Lix Account API

## Balances

Retrieve the current balance of your account. Returns the number of email credits and Standard Credits available.

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
print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "emailBalance": 10000,
  "linkedInBalance": 50000,
  "lookcBalance": 2500,
  "autoTopUpEnabled": {
    "standard": true,
    "org": false
  }
}
```

Field | Description
----- | -----------
`linkedInBalance` | Standard credits remaining (people/company lookups, enrichment, MCP server).
`lookcBalance` | Org credits remaining (LookC organisation and employee lookups).
`emailBalance` | Email credits remaining.
`autoTopUpEnabled.standard` | `true` if automatic top-up is switched on for standard credits. When enabled, a balance below your threshold is replenished automatically from your saved payment method.
`autoTopUpEnabled.org` | `true` if automatic top-up is switched on for org credits.

Enterprise accounts are invoiced manually, so both `autoTopUpEnabled` flags are always `false` for them. If the auto top-up lookup fails, `autoTopUpEnabled` is `null` (unknown) rather than `false`; the balances are still returned.

Auto top-up is configured in your Lix account under **Team settings → Auto top-up**.

## Daily Allowance

This endpoint retrieves your remaining daily allowance for your account.

<aside class="notice">
This endpoint is free to use.
</aside>

### HTTP Request

`GET https://api.lix-it.com/v1/account/allowances/daily`

### Response

Field     | Description
--------- | -----------
requestsRemaining | The number of requests remaining for the day.
refreshesAt | The unix timestamp in seconds of when the daily allowance will refresh.

```shell
curl "https://api.lix-it.com/v1/account/allowances/daily \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "https://api.lix-it.com/v1/account/allowances/daily"

headers = {
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers)

print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "requestsRemaining": 10000,
  "refreshesAt": 1696512494 // represents the unix timestamp in seconds of when the daily allowance will refresh
}
```
