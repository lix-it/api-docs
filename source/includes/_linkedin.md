# LinkedIn API

## LinkedIn People Search

This endpoint retrieves a single page for a LinkedIn People search. 

<aside class="notice"> Uses 1 Search Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/li/linkedin/search/people`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
url       | The LinkedIn search URL

#### Optional Parameters
Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this search as
sequence_id | A randomly generated string by you that is used to maintain collection settings between requests. [See the section on Sequence IDs for more information](#Using%20The%20API)

```shell
curl "https://api.lix-it.com/v1/li/linkedin/search/people?viewer_id=alfie-lambert&url=https://www.linkedin.com/search/results/people/?keywords=lix&origin=SWITCH_SEARCH_VERTICAL&sid=%40%2Co" \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "https://api.lix-it.com/v1/li/linkedin/search/people?viewer_id=alfie-lambert&url=https://www.linkedin.com/search/results/people/?keywords=lix&origin=SWITCH_SEARCH_VERTICAL&sid=%40%2Co"

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
  "searchResponse": {
    "people": [ Person ],
    "paging": { "count": 25, "start": 0, "total": 1000 },
  },
}
```

## Sales Navigator Leads Search

This endpoint retrieves a single search page for a LinkedIn Sales Navigator lead search.

<aside class="notice"> Uses 1 Search Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/li/sales/search/people`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
url       | The LinkedIn search URL

#### Optional Parameters
Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this search as
sequence_id | A randomly generated string by you that is used to maintain collection settings between requests. [See the section on Sequence IDs for more information](#Using%20The%20API)

```shell
curl "https://api.lix-it.com/v1/li/sales/search/people?viewer_id=alfie-lambert&url=https://www.linkedin.com/sales/search/people?query=(spellCorrectionEnabled%3Atrue%2CrecentSearchParam%3A(id%3A2154062338%2CdoLogHistory%3Atrue)%2Ckeywords%3Alix)&sessionId=GumqcP8vR0aPVWr3cNR74A%3D%3D" \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "https://api.lix-it.com/v1/li/sales/search/people?viewer_id=alfie-lambert&url=https://www.linkedin.com/sales/search/people?query=(spellCorrectionEnabled%3Atrue%2CrecentSearchParam%3A(id%3A2154062338%2CdoLogHistory%3Atrue)%2Ckeywords%3Alix)&sessionId=GumqcP8vR0aPVWr3cNR74A%3D%3D"

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
  "searchResponse": {
    "people": [ Person ],
    "paging": { "count": 25, "start": 0, "total": 2500 },
  },
  "meta": {
    "sequenceId": "jAkFkdjfi19kFdf"
  }
}
```