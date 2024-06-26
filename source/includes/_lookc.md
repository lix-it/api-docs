# LookC API

## Asynchronous Requests

Our LookC endpoints may take some time to fetch data, so we have added concept of an 'asynchronous request' to this API. This is a request that will complete in the background and you will receive a call to a webhook when this query is complete, or you can check on the progress of this request using the `request_id` query parameter.

If an endpoint is asynchronous it will be designated as `async enabled` in the documentation.

### Checking the Status of an Asynchronous Request

You can check the status of an asynchronous request by passing the `request_id` into the `request_id` query parameter.

### HTTP Request

`GET https://api.lookc.io/v1/search/person/by-email`

Parameter | Description
--------- | -----------
request_id     | The request ID of the asynchronous request you are checking.


```shell
curl "https://api.lookc.io/v1/request?request_id=1234-f197-1fsd8-fs987"
```

> Returns: 

```json
{
  "status": "complete",
  "data": {
    "hits": [
      {
        "name": "Alfie Lambert",
        "liProfileUrl": "alfie-lambert",
        "salesNavUrl": "https://linkedin.com/sales/ACwAAAXQSFkBI1hIhlJLnr04EL-0FSqe1SIXTEM,NAME,undefined",
      },
    ],
    "org": {
      "name": "Lix",
      "liProfileUrl": "https://linkedin.com/company/lix",
      "salesNavUrl": "https://linkedin.com/sales/company/1670390",
    },
    "domainInfo": {
      "isFreeEmailDomain": false
    }
  }
}
```

### Webhooks

If you have set up a webhook in your dashboard the webhook will be notified when the request is complete. The `type` field will be the name of the endpoint and the `data` field will be the response.

```json
{
    "type": "search.person.by-email",
    "data": {
        "hits": [
        {
            "name": "Alfie Lambert",
            "liProfileUrl": "alfie-lambert",
            "salesNavUrl": "https://linkedin.com/sales/ACwAAAXQSFkBI1hIhlJLnr04EL-0FSqe1SIXTEM,NAME,undefined",
        },
        ],
        "org": {
            "name": "Lix",
            "liProfileUrl": "https://linkedin.com/company/lix",
            "salesNavUrl": "https://linkedin.com/sales/company/1670390",
        },
        "domainInfo": {
            "isFreeEmailDomain": false
        }
    }
}
```

## Lookup Person by Email Address `async enabled`

Search a person's LinkedIn profile URL from their email address.

Results are given as an array of `hits` objects which represent individuals at the company.

<aside class="notice"> Uses 1 Org Credit.</aside>

### HTTP Request

`GET https://api.lookc.io/v1/search/person/by-email`

Parameter | Description
--------- | -----------
email     | The email address of the person you are searching for.

```shell
curl "https://api.lookc.io/v1/search/person/by-email?email=alfie@lix-it.com \
    -H "Authorization: [lixApiKey]"
```

> Returns:

```json
{
  "hits": [
    {
      "name": "Alfie Lambert",
      "liProfileUrl": "alfie-lambert",
      "salesNavUrl": "https://linkedin.com/sales/ACwAAAXQSFkBI1hIhlJLnr04EL-0FSqe1SIXTEM,NAME,undefined",
    },
  ],
  "org": {
    "name": "Lix",
    "liProfileUrl": "https://linkedin.com/company/lix",
    "salesNavUrl": "https://linkedin.com/sales/company/1670390",
  },
  "domainInfo": {
    "isFreeEmailDomain": false
  }
}
```

### Async Requests
Type: `search.person.by-email`
