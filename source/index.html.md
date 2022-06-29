---
title: Lix API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby
  - python
  - javascript

toc_footers:
  - <a href='#'>Contact sales</a>
  - <a href='https://github.com/slatedocs/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true

code_clipboard: true

meta:
  - name: Lix's Real Time API
    content: Documentation for the Lix API
---

# Introduction

Welcome to Lix's API! You can use this API to access all our API endpoints, such as the Person API to look up email addresses, or the Company API to look up company information related to a domain name.

The API is organized around REST. All requests should be made over SSL. All request and response bodies, including errors, are encoded in JSON.

We also have some specific language bindings to make integration easier. You can switch the programming language of the examples with the tabs in the top right.

Currently we support the following official client bindings:

- Node
- Python
- Go
- Javascript
- Java

Should you have further questions, feel free to contact our tech team via help@lix-it.com.

# Authentication

> To authorize, use this code:

```ruby
require 'lix'

api = Lix::APIClient.authorize!('lixApiKey')
```

```python
import lix

api = lix.authorize('lixApiKey')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here" \
  -H "Authorization: lixApiKey"
```

```javascript
const lix = require('lix');

let api = lix.authorize('lixApiKey');
```

> Make sure to replace `lixApiKey` with your API key.

Lix uses API keys to allow access to the API. Should you not have an API Token yet, please [mailto:help@lix-it.com]contact our sales team to receive one.

Lix expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: lixApiKey`

or with a query variable:

`https://api.lix-it.com/v1/person?profile=alfie-lambert&api_key=lixApiKey`

Please bear in mind to also specify the Content-Type as application/json format.


<aside class="notice">
You must replace <code>lixApiKey</code> with your personal API key.
</aside>

# Response Codes
## HTTP Status Codes
Our API returns standard HTTP success or error status codes as listed below. For errors, we will also include extra information about what went wrong encoded in the response as JSON. The various HTTP status codes we might return are listed below.

CODE | TITLE | DESCRIPTION
----- | ---- | -----------
200 |	Success |	The request was successful
400 |	Bad Request |	The request data has not been provided correctly
401 |	Unauthorized |	Your API key is not authorised to access this endpoint
402 |	Over quota |	Over plan quota on this endpoint. Please top-up your account or [mailto:] speak to sales to increase your quota.
404 |	Not found |	The endpoint does not exist
429 |	Too Many Requests |	The rate limit was exceeded
500 |	Internal Server Error |	An error occurred on the server. Should this error persis, please contact our technical team.
503 | Service Unavailable |	The API is temporarily unavailable

## Error types
All errors are returned in the form of JSON with a type and optional message.

> Example error response:

```
   {
     "error": {
       "type": "params_invalid",
       "message": "profile_id is required"
     }
   }
```

Type |  Description
---- | ------------
params_invalid |  Your parameters were not valid
unknown_record |  Record was not found
unknown_route | URL was not valid
queued |  Lookup queued. Try this request again in a few minutes
rate_limit |  The request has been rate limited
api_error | Internal API error


# Profiles API

This section describes the data you can expect from each returned profile. The same profile data structure will be returned from multiple profile collection endpoints as described below. Each profile is equivalent to 1 credit.

<aside class="notice">
Please be aware if some data points of profiles do not exist, these will be returned as null.
</aside>

## Profile Schema

```ruby
require 'lix'

api = Lix::APIClient.authorize!('lixApiKey')
api.kittens.get
```

```python
import lix

api = lix.authorize('lixApiKey')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens" \
  -H "Authorization: lixApiKey"
```

```javascript
const lix = require('lix');

let api = lix.authorize('lixApiKey');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'lix'

api = Lix::APIClient.authorize!('lixApiKey')
api.kittens.get(2)
```

```python
import lix

api = lix.authorize('lixApiKey')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2" \
  -H "Authorization: lixApiKey"
```

```javascript
const lix = require('lix');

let api = lix.authorize('lixApiKey');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

## Delete a Specific Kitten

```ruby
require 'lix'

api = Lix::APIClient.authorize!('lixApiKey')
api.kittens.delete(2)
```

```python
import lix

api = lix.authorize('lixApiKey')
api.kittens.delete(2)
```

```shell
curl "http://example.com/api/kittens/2" \
  -X DELETE \
  -H "Authorization: lixApiKey"
```

```javascript
const lix = require('lix');

let api = lix.authorize('lixApiKey');
let max = api.kittens.delete(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "deleted" : ":("
}
```

This endpoint deletes a specific kitten.

### HTTP Request

`DELETE http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to delete

