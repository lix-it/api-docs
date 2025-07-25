# Response Codes
## HTTP Status Codes
Our API returns standard HTTP success or error status codes as listed below. For errors, we will also include extra information about what went wrong encoded in the response as JSON. The various HTTP status codes we might return are listed below.

CODE | TITLE | DESCRIPTION
----- | ---- | -----------
200 |	Success |	The request was successful
400 |	Bad Request |	The request data has not been provided correctly
401 |	Unauthorized |	Your API key is not authorised to access this endpoint
402 |	Over quota |	Over plan quota on this endpoint. Please top-up your account or speak to sales to increase your quota.
400 | Bad Request | The request data has not been provided correctly. Please see error message for more information.
407 | Proxy Authentication Required | The 'viewer_id' parameter was not correctly set. Either it has not been connected to Lix, or the 'viewer_id' is incorrect.
404 |	Not found |	The endpoint does not exist
429 |	Too Many Requests |	The rate limit was exceeded
500 |	Internal Server Error |	An error occurred on the server. Should this error persist, please contact our technical team.
503 | Service Unavailable |	The API is temporarily unavailable

## Error types
All errors are returned in the form of JSON with a type and optional message.

> Example error response:

```
   {
     "error": {
       "type": "params_invalid",
       "message": "profile_link is required"
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
viewer_invalid | the 'Viewer' was not found or does not have the correct permissions
daily_limit | The daily limit for this endpoint has been reached
