---
title: Lix API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby
  - python
  - javascript

toc_footers:
  - <a href='/api/#contact-form'>Contact sales</a>
  - We are not affiliated with LinkedIn.

includes:
  - search
  - enrichment
  - linkedin
  - ai
  - errors

search: true

code_clipboard: true

meta:
  - name: Lix's Real Time API
    content: Lix LinkedIn API Documentation
---

# Introduction

Welcome to Lix's API! You can use this API to access all our API endpoints, such as the Person API to look up email addresses, or the Company API to look up company information related to a domain name.

The API is organized around REST. All requests should be made over SSL. All request and response bodies, including errors, are encoded in JSON.

We also have some specific language code examples to make integration easier. You can switch the programming language of the examples with the tabs in the top right.

Currently we have code examples for the following languages:

- Node
- Python
- Go
- Javascript
- Java

Should you have further questions, feel free to contact our tech team via email at [help@lix-it.com](mailto:help@lix-it.com) or by using the web chat in the bottom right of your screen.

# Authentication

> To authorize, use this code:

```ruby
require 'lix'

api = Lix::APIClient.authorize!('lixApiKey')
```

```python
import requests

url = "https://api.lix-it.com/v1/person?profile_link=https://linkedin.com/in/alfie-lambert"

payload={}
headers = {
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here" \
  -H "Authorization: lixApiKey"
```

> Make sure to replace `lixApiKey` with your API key.

Lix uses API keys to allow access to the API. If you do not have an API Token yet, please [contact our sales team](mailto:help@lix-it.com) to receive one.

Lix expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: lixApiKey`

or with a query variable:

`https://api.lix-it.com/v1/person?profile_link=https://linkedin.com/in/alfie-lambert&api_key=lixApiKey`

Please bear in mind to also specify the Content-Type as application/json format.


<aside class="notice">
You must replace <code>lixApiKey</code> with your personal API key.
</aside>

# Using the API

## Sequence IDs

Some endpoints require you to use a `sequence_id` query parameter, which is a unique identifier for a sequence of requests. This sequence parameter is returned from any endpoint where there are multiple pages, and allows you to use the same settings in the Lix's crawling systems from request-to-request. If you omit the sequence parameter you will be in danger of producing different duplicate search results.

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
