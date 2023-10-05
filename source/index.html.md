---
title: Lix API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby
  - python
  - javascript
  - Go

toc_footers:
  - <a href='/api/#contact-form'>Contact sales</a>
  - We are not affiliated with LinkedIn.

includes:
  - lix_account
  - account
  - search
  - enrichment
  - linkedin
  - lookc
  - ai
  - contact
  - errors

search: true

code_clipboard: true

meta:
  - name: Lix's Real Time API
    content: Lix LinkedIn API Documentation
---

# Introduction

Welcome to Lix's API! You can use this API to access all our API endpoints, such as the Contact API to look up email addresses by LinkedIn profile ID, or the People API to look up professional information for a person.

The API is organized around REST. All requests should be made over SSL. All request and response bodies, including errors, are encoded in JSON.

We also have some specific language code examples to make integration easier. You can switch the programming language of the examples with the tabs in the top right.

Currently we have code examples for the following languages:

- Node
- Python 3
- Go
- Javascript
- Java

Should you have further questions, feel free to contact our tech team via email at [help@lix-it.com](mailto:help@lix-it.com) or by using the web chat in the bottom right of your screen.

# API Productivity

We organise our APIs into different collections, each of which we call an 'API', with each API having a number of endpoints.

## API Specs & Postman 

At Lix, we love Postman, we think it's a great way to share APIs and make them easily accessible for your team. If a Postman collection is available for an API, you will find a 'Run in Postman' link at the top of the API collection.

If you would like our OpenAPI v3.1 specification we can also send that across, let us know through our live chat.

# Authentication

> To authorize, use this code:

```python
import requests

url = "https://api.lix-it.com/v1/person?profile_link=https://linkedin.com/in/alfie-lambert"

payload={}
headers = {
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.json())
```

```javascript
const axios = require('axios');

const url = "https://api.lix-it.com/v1/person?profile_link=https://linkedin.com/in/alfie-lambert";

const headers = {
  'Authorization': lixApiKey,
}

const response = axios.get(url, headers);

console.log(response.data);
```

```Go
package main

import (
  "fmt"
  "io/ioutil"
  "net/http"
)

func main() {
  req, _ := http.NewRequest("GET", "https://api.lix-it.com/v1/person?profile_link=https://linkedin.com/in/alfie-lambert", nil)

  req.SetHeaders

}
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here" \
  -H "Authorization: lixApiKey"
```

> Make sure to replace `lixApiKey` with your API key.

Lix uses API keys to allow access to the API. If you do not have an API Token yet, please [visit your API dashboard](https://lix-it.com/home/api) to generate one. You will need to verify your identity first, it's a simple process that takes less than a minute. You can see more information about our verification process [here](https://help.lix-it.com/en/articles/8074514-how-to-verify-your-identity).

Lix expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: lixApiKey`

or with a query variable:

`https://api.lix-it.com/v1/person?profile_link=https://linkedin.com/in/alfie-lambert&api_key=lixApiKey`

Please bear in mind to also specify the Content-Type as application/json format.


<aside class="notice">
You must replace <code>lixApiKey</code> with your personal API key.
</aside>

# Using the API

## Passing URLs
When passing URLs to an endpoint ensure that the URL is 'URL Encoded'. You can see the description of what that is [here](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding). Most programming languages have standard libraries that deal with encoding values for URLs.

```javascript
const encoded = encodeURIComponent('https://linkedin.com/in/alfie-lambert');
const url = "https://api.lix-it.com/v1/person?profile_link=" + encoded;
```

```python
import urllib.parse

linkedin_url = "https://linkedin.com/in/alfie-lambert"

linkedin_url = urllib.parse.quote(linkedin_url, safe='')

url = "https://api.lix-it.com/v1/person?profile_link=" + linkedin_url
```

```Go
import (
  "net/url"
)

linkedin_url := "https://linkedin.com/in/alfie-lambert"

linkedin_url = url.QueryEscape(linkedin_url)

url := "https://api.lix-it.com/v1/person?profile_link=" + linkedin_url
```

### Postman
There is more information on how to URI encode values in Postman [here](https://learning.postman.com/docs/sending-requests/requests/#sending-parameters).

## Sequence IDs & Pagination

Some endpoints require you to use a `sequence_id` query parameter, which is a unique identifier for a sequence of requests. This sequence parameter is returned from any endpoint where there are multiple pages, and allows you to use the same settings in the Lix's crawling systems from request to request. If you omit the sequence parameter you will be in danger of producing different duplicate search results.

If you use the `viewer_id` field you do not need to use the `sequence_id` parameter.

## Rate Limiting

We have a default rate limit of 1 request per 3 seconds. If you exceed this limit you will receive a 429 error. If you need to make more requests please contact our team or upgrade your plan.
