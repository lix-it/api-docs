# LinkedIn Search API

## LinkedIn People Search

This endpoint retrieves a single page for a LinkedIn People search. 

<aside class="notice"> Uses 1 Search Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/li/linkedin/search/people`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
url       | The url-encoded LinkedIn search URL

#### Optional Parameters
Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this search as
sequence_id | A randomly generated string by you that is used to maintain collection settings between requests. [See the section on Sequence IDs for more information](#sequence-ids-amp-pagination)

```shell
curl "https://api.lix-it.com/v1/li/linkedin/search/people?url=https://www.linkedin.com/search/results/people/?keywords=lix&origin=SWITCH_SEARCH_VERTICAL&sid=%40%2Co" \
  -H "Authorization: lixApiKey"
```

```python
import requests
import urllib.parse

linkedin_url = "https://www.linkedin.com/search/results/people/?keywords=lix&origin=SWITCH_SEARCH_VERTICAL&sid=%40%2Co"

# encode the URL
linkedin_url = urllib.parse.quote(linkedin_url, safe='')

url = "https://api.lix-it.com/v1/li/linkedin/search/people?url=" + linkedin_url


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
  "searchResponse": {
    "people": [ Person ],
    "paging": { "count": 25, "start": 0, "total": 1000 },
  },
}
```

## LinkedIn Job Search

This endpoint retrieves a single page for a LinkedIn Job search. 

<aside class="notice"> Uses 1 Search Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/li/linkedin/search/jobs`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
url       | The url-encoded LinkedIn search URL

#### Optional Parameters
Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this search as
sequence_id | A randomly generated string by you that is used to maintain collection settings between requests. [See the section on Sequence IDs for more information](#sequence-ids-amp-pagination)

```shell
curl "https://api.lix-it.com/v1/li/linkedin/search/jobs?url=https://www.linkedin.com/jobs/search/?currentJobId=3436671233&keywords=lix" \
  -H "Authorization: lixApiKey"
```

```python
import requests
import urllib.parse

linkedin_url = "https://www.linkedin.com/jobs/search/?currentJobId=3436671233&keywords=lix"

# encode the URL
linkedin_url = urllib.parse.quote(linkedin_url, safe='')

url = "https://api.lix-it.com/v1/li/linkedin/search/jobs?url=" + linkedin_url

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
  "searchResponse": {
    "people": [ JobPosting ],
    "paging": { "count": 10, "start": 0, "total": 1000 },
  },
}
```

## LinkedIn Posts Search

This endpoint retrieves a single page for a LinkedIn Posts search. 

<aside class="notice"> Uses 1 Search Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/li/linkedin/search/posts`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
url       | The url-encoded LinkedIn search URL

#### Optional Parameters
Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this search as
sequence_id | A randomly generated string by you that is used to maintain collection settings between requests. [See the section on Sequence IDs for more information](#sequence-ids-amp-pagination)

```shell
curl "https://api.lix-it.com/v1/li/linkedin/search/posts?url=https%3A%2F%2Fwww.linkedin.com%2Fsearch%2Fresults%2Fcontent%2F%3Fkeywords%3Dlix%26origin%3DSWITCH_SEARCH_VERTICAL%26sid%3DV2J" \
  -H "Authorization: lixApiKey"
```

```python
import requests
import urllib.parse

linkedin_url = "https://www.linkedin.com/search/results/content/?keywords=lix&origin=SWITCH_SEARCH_VERTICAL&sid=V2J"

# encode the URL
linkedin_url = urllib.parse.quote(linkedin_url, safe='')

url = "https://api.lix-it.com/v1/li/linkedin/search/posts?url=" + linkedin_url

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
  "searchResponse": {
    "posts": [ Post ],
    "paging": { "count": 10, "start": 0, "total": 1000 },
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
url       | The url-encoded LinkedIn search URL

#### Optional Parameters
Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this search as
sequence_id | A randomly generated string by you that is used to maintain collection settings between requests. [See the section on Sequence IDs for more information](#sequence-ids-amp-pagination)

```shell
curl "https://api.lix-it.com/v1/li/sales/search/people?url=https://www.linkedin.com/sales/search/people?query=(spellCorrectionEnabled%3Atrue%2CrecentSearchParam%3A(id%3A2154062338%2CdoLogHistory%3Atrue)%2Ckeywords%3Alix)&sessionId=GumqcP8vR0aPVWr3cNR74A%3D%3D" \
  -H "Authorization: lixApiKey"
```

```python
import requests
import urllib.parse

linkedin_url = "https://www.linkedin.com/sales/search/people?query=(spellCorrectionEnabled%3Atrue%2CrecentSearchParam%3A(id%3A2154062338%2CdoLogHistory%3Atrue)%2Ckeywords%3Alix)&sessionId=GumqcP8vR0aPVWr3cNR74A%3D%3D"

# encode the URL
linkedin_url = urllib.parse.quote(linkedin_url, safe='')

url = "https://api.lix-it.com/v1/li/sales/search/people?url=" + linkedin_url

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
  "searchResponse": {
    "people": [ Person ],
    "paging": { "count": 25, "start": 0, "total": 2500 },
  },
  "meta": {
    "sequenceId": "jAkFkdjfi19kFdf"
  }
}
```

## Search Facet Typeahead

This endpoint retrieves typeaheads for a LinkedIn search facet.

If you are trying to build a search URL, you can use this endpoint to get the typeahead for a search facet. For example, if you want to search for people who work at Google, you can use this endpoint to get the typeahead for the company facet. Then you can use the typeahead to build your search URL.

<aside class="notice">This endpoint is free of charge to customers who have available credits in their account.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/search/sales/facet`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
query     | The search query. For instance 'Goog' with a type of 'COMPANY_TITLE' will return 'Google' as a typeahead.
type      | The type of search you would like to perform. Available options are `BING_GEO` (geography);`COMPANY_WITH_LIST` (company name); `SENIORITY_V2` (seniority); `TITLE` (Job Title); `INDUSTRY` (industry); `GROUP` (LinkedIn groups); `SCHOOL` (Education); `COMPANY_TYPE` (company type); `FUNCTION` (job function); `COMPANY_SIZE` (company size); `TENURE` (years of experience); `PROFILE_LANGUAGE` (profile language)


#### Optional Parameters
Parameter | Description
--------- | -----------
count     | The number of typeaheads you would like to return. The default is 100.
start     | The index of the first typeahead you would like to return. The default is 0.
viewer_id | The LinkedIn ID of the account you would like to view this search as

```shell
curl "https://api.lix-it.com/v1/search/sales/facet?query=E&type=SENIORITY&count=100&start=0" \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "https://api.lix-it.com/v1/search/sales/facet?query=E&type=SENIORITY&count=100&start=0"


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
    "data": {
        "elements": [
            {
                "displayValue": "Entry",
                "id": "3"
            },
            {
                "displayValue": "Owner",
                "id": "10"
            },
            {
                "displayValue": "Partner",
                "id": "9"
            },
            {
                "displayValue": "Director",
                "id": "6"
            },
            {
                "displayValue": "Manager",
                "id": "5"
            },
            {
                "displayValue": "Senior",
                "id": "4"
            }
        ],
        "paging": {
            "count": 100
        }
    }
}
```