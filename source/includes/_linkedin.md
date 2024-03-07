# LinkedIn Search API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5140183-36bf942b-6945-4816-a954-46f83c53ec21?action=collection%2Ffork&collection-url=entityId%3D5140183-36bf942b-6945-4816-a954-46f83c53ec21%26entityType%3Dcollection%26workspaceId%3Dcc78921f-4152-4fc0-9c2f-75ef5c7a5895)

## LinkedIn People Search

This endpoint retrieves a single page for a LinkedIn People search. 

<aside class="notice"> Uses 1 Standard Credit.</aside>

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

<aside class="notice"> Uses 1 Standard Credit.</aside>

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

## Job Posting Hirers

<aside class="notice">
Uses 1 Standard Credit.
</aside>

This endpoint retrieves the hirers for a job posting.

### HTTP Request

`GET https://api.lix-it.com/v1/li/linkedin/jobs/hirers`

### URL Parameters

#### Required parameters

Parameter | Description
--------- | -----------
job_id | The LinkedIn ID of the job posting.

#### Optional parameters

Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this post as.

```python
import requests

url = "https://api.lix-it.com/v1/li/linkedin/jobs/hirers?job_id=3556453411"

payload={}
headers = {
  'Authorization': [lixApiKey]
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.json())
```

```shell
curl "https://api.lix-it.com/v1/enrich/job?job_id=3556453411" \
  -H "Authorization: lixApiKey"
```

> The above command returns JSON structured like this:

```json
{
    "people": [
        {
            "name": "Emma Cardona",
            "img": "https://media.licdn.com/dms/image/D4E03AQG2XnuMe5Vyuw/profile-displayphoto-shrink_800_800/0/1702565423871?e=1713398400&v=beta&t=nwVI6lqyqVfplASGUbzgAmMJTiVW09ptn3zWQggMqNc",
            "headline": "Associate Director, People & Operations",
            "link": "https://www.linkedin.com/in/emmalowery"
        },
        {
            "name": "Philister Lukacevic",
            "img": "https://media.licdn.com/dms/image/C5603AQH-SpqGVLr9CQ/profile-displayphoto-shrink_800_800/0/1516870841685?e=1713398400&v=beta&t=v62FdwHH9VuAnxMLDlDa0H7lpt3tWMYrZBbK1umWios",
            "headline": "Nonprofit Marketing and Communications | Social Justice & Mental Health Advocate",
            "link": "https://www.linkedin.com/in/philistersidigu"
        }
    ]
}
```

## LinkedIn Posts Search

This endpoint retrieves a single page for a LinkedIn Posts search. 

This endpoint uses a `start` parameter.

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/li/linkedin/search/posts`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
url       | The url-encoded LinkedIn search URL
start     | The start offset of the page.

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

## LinkedIn Org Search

This endpoint retrieves a single page for a LinkedIn Org search. 

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/li/linkedin/search/orgs`

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
curl "https://api.lix-it.com/v1/li/linkedin/search/orgs?url=https%3A%2F%2Fwww.linkedin.com%2Fsearch%2Fresults%2Fcompanies%2F%3Fkeywords%3Dlondon%26origin%3DSWITCH_SEARCH_VERTICAL%26sid%3Do(E" \
  -H "Authorization: lixApiKey"
```

```python
import requests
import urllib.parse

linkedin_url = "https://www.linkedin.com/search/results/companies/?keywords=london&origin=SWITCH_SEARCH_VERTICAL&sid=o(E"

# encode the URL
linkedin_url = urllib.parse.quote(linkedin_url, safe='')

url = "https://api.lix-it.com/v1/li/linkedin/search/orgs?url=" + linkedin_url

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
    "posts": [ Org ],
    "paging": { "count": 10, "start": 0, "total": 1000 },
  },
}
```

## Sales Navigator Leads Search

This endpoint retrieves a single search page for a LinkedIn Sales Navigator lead search.

<aside class="notice"> Uses 1 Standard Credit.</aside>

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

## Sales Navigator Leads Search (Parameterized)

This endpoint retrieves a single search page for a LinkedIn Sales Navigator lead search.

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/people/search`

### URL Parameters

#### Filters

Filters require filter IDs, which can be retrieved using the [Search Facet Typeahead](#search-facet-typeahead) endpoint.

Parameter | Description
--------- | -----------
person_titles       | The job titles for the people you would like to search for, encoded as a JSON array of an id, text pair. For example, `person_titles=[39,Senior Software Engineer]`.
location            | The location for the people you would like to search for, encoded as a JSON array of an id, text pair. For example, `location=[105763813,Colorado\\, United States]`.

#### Optional Parameters
Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this search as
sequence_id | A randomly generated string by you that is used to maintain collection settings between requests. [See the section on Sequence IDs for more information](#sequence-ids-amp-pagination)

```shell
curl --location --globoff 'https://api.lix-it.com/v1/people/search?person_titles=[39%2CSenior%20Software%20Engineer]&location=[105763813%2CColorado%5C%2C%20United%20States]' \
--header 'Authorization: $API_KEY'
```

```python
import requests

url = "https://api.lix-it.com/v1/people/search?person_titles=[39,Senior Software Engineer]&location=[105763813,Colorado\\, United States]"

payload = {}
headers = {
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

> The above command returns JSON structured like this:

```json
{
  "people": [ Person ],
  "paging": { "count": 25, "start": 0, "total": 2500 },
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

## LinkedIn Recruiter Candidate Search

This endpoint retrieves a single search page for a LinkedIn Recruiter candidate search.

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request
`GET https://api.lix-it.com/v1/li/recruiter/search/people`

### URL Parameters

#### Required JSON Body Parameters

Parameter | Description
--------- | -----------
skills       | The skills of the candidates you would like to search for. This is an array of objects. Each object has the following attributes: `text` (the skill name); `entity` (the LinkedIn skill entity ID); `negated` (whether the skill should be negated); `required` (whether the skill is required); `selected` (whether the skill is selected).

#### Optional URL Query Parameters
Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this search as
sequence_id | A randomly generated string by you that is used to maintain collection settings between requests. [See the section on Sequence IDs for more information](#sequence-ids-amp-pagination)

#### Optional JSON Body Parameters
Parameter | Description
--------- | -----------
start | The index of the first candidate you would like to return. The default is 0.

```shell
curl "https://api.lix-it.com/v1/li/recruiter/search/people" \
  -H "Authorization: lixApiKey"
```

```python
import json
import requests
import urllib.parse

linkedin_url = "https://api.lix-it.com/v1/li/recruiter/search/people"

payload=json.dumps({
    "start": 0,
    "skills": [{
        "text": "Machine Learning",
        "entity": "urn:li:ts_skill:3289",
        "negated": false,
        "required": false,
        "selected": true
    }]
})
headers = {
  'Content-type': 'application/json',
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "people": [ Person ],
  "paging": { "count": 25, "start": 0, "total": 2500 },
  "meta": {
    "sequenceId": "jAkFkdjfi19kFdf"
  }
}
```

## Recruiter Search Facet Typeahead

This endpoint retrieves typeaheads for a LinkedIn Recruiter search facet.

If you are trying to build a search URL, you can use this endpoint to get the typeahead for a search facet. For example, if you want to search for people who have skills in Javascript, you can use this endpoint to get the typeahead for the skills. Then you can use the typeahead to build your search URL.

<aside class="notice">This endpoint is free of charge to customers who have available credits in their account.</aside>

### HTTP Request
`GET http://api.lix-it.com/v1/li/recruiter/search/facet`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
query     | The search query. For instance 'Javascr' with a type of 'skill' will return 'Javasript' as a typeahead.
q      | The type of search you would like to perform. Available options are: `skill` (Skills)
start | The index of the first typeahead you would like to return. The default is 0.
count | The number of typeaheads you would like to return. The default is 100.


#### Optional Parameters
Parameter | Description
--------- | -----------
count     | The number of typeaheads you would like to return. The default is 100.
start     | The index of the first typeahead you would like to return. The default is 0.
viewer_id | The LinkedIn ID of the account you would like to view this search as

```shell
curl "http://api.lix-it.com/v1/li/recruiter/search/facet?query=Javascrip&type=skill&count=100&start=0" \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "http://api.lix-it.com/v1/li/recruiter/search/facet?query=Javascrip&type=skill&count=100&start=0"


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
    "meta": {
        "sequenceId": "01HNJHSE0E4RBSV5KBV50V523X"
    },
    "paging": {
        "count": 10,
        "start": 10,
        "total": 10
    },
    "results": [
        {
            "entity": "urn:li:ts_skill:218",
            "text": "JavaScript"
        },
        {
            "entity": "urn:li:ts_skill:280",
            "text": "HTML"
        },
        {
            "entity": "urn:li:ts_skill:12383",
            "text": "JavaScript Libraries"
        },
        {
            "entity": "urn:li:ts_skill:26965",
            "text": "Mocha (JavaScript Framework)"
        },
        {
            "entity": "urn:li:ts_skill:687",
            "text": "AJAX"
        },
        {
            "entity": "urn:li:ts_skill:4956",
            "text": "JSON"
        },
        {
            "entity": "urn:li:ts_skill:37357",
            "text": "JavaScriptMVC"
        },
        {
            "entity": "urn:li:ts_skill:55736",
            "text": "JavaScript eXtension (JSX)"
        },
        {
            "entity": "urn:li:ts_skill:55595",
            "text": "Embedded JavaScript (EJS)"
        },
        {
            "entity": "urn:li:ts_skill:13655",
            "text": "Unobtrusive Javascript"
        }
    ]
}```