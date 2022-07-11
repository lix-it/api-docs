---
title: Lix API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby
  - python
  - javascript

toc_footers:
  - <a href='/api/#contact-form'>Contact sales</a>

includes:
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

Lix uses API keys to allow access to the API. If you do not have an API Token yet, please [contact our sales team](mailto:help@lix-it.com) to receive one.

Lix expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: lixApiKey`

or with a query variable:

`https://api.lix-it.com/v1/person?profile=alfie-lambert&api_key=lixApiKey`

Please bear in mind to also specify the Content-Type as application/json format.


<aside class="notice">
You must replace <code>lixApiKey</code> with your personal API key.
</aside>

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
Remember — a happy profile is an authenticated profile!
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

This endpoint retrieves a specific profile.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the profile to retrieve

### HTTP Request

`DELETE http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the profile to delete

