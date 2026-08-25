# LinkedIn Messages API

Retrieve and send LinkedIn messages for a given conversation.

## Get Messages

Retrieve the messages in a LinkedIn conversation. `viewer_id` is required.

<aside class="notice">Uses 1 Standard Credit.</aside>

### HTTP Request

`GET https://api.lix-it.com/v1/li/messages`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
viewer_id | The Lix viewer id of the account you would like to view this conversation as.
conversation_id **or** conversation_urn | The Lix conversation id or the full LinkedIn conversation URN. You must provide exactly one of these two parameters.

#### Optional Parameters

Parameter | Default | Description
--------- | ------- | -----------
sequence_id | | A Lix sequence id returned from a previous request. Pass it back to load the next page of messages.
delivered_at | | A timestamp anchor for pagination around a specific message.
count_before | 0 | Number of messages to load before the anchor.
count_after | 0 | Number of messages to load after the anchor.

```shell
curl "https://api.lix-it.com/v1/li/messages?viewer_id=YOUR_VIEWER_ID&conversation_id=YOUR_CONVERSATION_ID" \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "https://api.lix-it.com/v1/li/messages?viewer_id=YOUR_VIEWER_ID&conversation_id=YOUR_CONVERSATION_ID"

headers = {
  'Authorization': 'lixApiKey'
}

response = requests.request("GET", url, headers=headers)
print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "messages": [
    {
      "backendUrn": "urn:li:messagingMessage:2-...",
      "conversationUrn": "urn:li:msg_conversation:(...)",
      "backendConversationUrn": "urn:li:messagingThread:...",
      "deliveredAt": "1784478668446",
      "bodyText": "Hey, we launched a new version of our product...",
      "originToken": "f7f4fe26-31b1-483b-b82d-a7f0533a4a56",
      "senderHostIdentityUrn": "urn:li:fsd_profile:YOUR_VIEWER_ID",
      "senderFirstName": "Jane",
      "senderLastName": "Doe",
      "senderHeadline": "CEO at Example",
      "senderProfileUrl": "https://www.linkedin.com/in/YOUR_PUBLIC_ID",
      "senderPublicIdentifier": "your-public-id",
      "senderProfilePictureUrl": "https://media.licdn.com/dms/image/..."
    }
  ],
  "sequenceId": "YOUR_SEQUENCE_ID"
}
```

## Send Message

Send a message to an existing LinkedIn conversation. `viewer_id` is required.

<aside class="notice">Uses 1 Standard Credit.</aside>

### HTTP Request

`POST https://api.lix-it.com/v1/li/messages`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
viewer_id | The Lix viewer id of the account you would like to send the message as.

### Body Parameters

Parameter | Description
--------- | -----------
conversation_id **or** conversation_urn | The Lix conversation id or the full LinkedIn conversation URN. You must provide exactly one of these two parameters.
body | The message text to send. Maximum 8,000 characters.

```shell
curl -X POST "https://api.lix-it.com/v1/li/messages?viewer_id=YOUR_VIEWER_ID" \
  -H "Authorization: lixApiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "conversation_id": "YOUR_CONVERSATION_ID",
    "body": "Hey, we launched a new version of our product."
  }'
```

```python
import requests

url = "https://api.lix-it.com/v1/li/messages?viewer_id=YOUR_VIEWER_ID"

payload = {
  "conversation_id": "YOUR_CONVERSATION_ID",
  "body": "Hey, we launched a new version of our product."
}

headers = {
  'Authorization': 'lixApiKey',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, json=payload)
print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "message": {
    "backendUrn": "urn:li:messagingMessage:2-...",
    "conversationUrn": "urn:li:msg_conversation:(...)",
    "backendConversationUrn": "urn:li:messagingThread:...",
    "deliveredAt": "1784478668446",
    "bodyText": "Hey, we launched a new version of our product.",
    "originToken": "f7f4fe26-31b1-483b-b82d-a7f0533a4a56",
    "senderHostIdentityUrn": "urn:li:fsd_profile:YOUR_VIEWER_ID"
  }
}
```

## Get Conversations

Retrieve the list of LinkedIn conversations for a viewer account. `viewer_id` is required.

<aside class="notice">Uses 1 Standard Credit.</aside>

### HTTP Request

`GET https://api.lix-it.com/v1/li/conversations`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
viewer_id | The Lix viewer id of the account you would like to fetch conversations for.

#### Optional Parameters

Parameter | Default | Description
--------- | ------- | -----------
sequence_id | | A Lix sequence id returned from a previous request. Pass it back to load the next page of conversations.
count | 20 | Maximum number of conversations to return per page.

```shell
curl "https://api.lix-it.com/v1/li/conversations?viewer_id=YOUR_VIEWER_ID" \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "https://api.lix-it.com/v1/li/conversations?viewer_id=YOUR_VIEWER_ID"

headers = {
  'Authorization': 'lixApiKey'
}

response = requests.request("GET", url, headers=headers)
print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "conversations": [
    {
      "backendUrn": "urn:li:messagingThread:2-...",
      "conversationUrn": "urn:li:msg_conversation:(...)",
      "title": "Jane Doe",
      "createdAt": "1784478668446",
      "lastActivityAt": "1784478668446",
      "unreadCount": 0,
      "read": true,
      "groupChat": false,
      "conversationUrl": "https://www.linkedin.com/messaging/thread/YOUR_CONVERSATION_ID/",
      "participants": [
        {
          "hostIdentityUrn": "urn:li:fsd_profile:YOUR_VIEWER_ID",
          "firstName": "Jane",
          "lastName": "Doe",
          "headline": "CEO at Example",
          "profileUrl": "https://www.linkedin.com/in/YOUR_PUBLIC_ID",
          "publicIdentifier": "your-public-id",
          "profilePictureUrl": "https://media.licdn.com/dms/image/..."
        }
      ],
      "lastMessage": {
        "backendUrn": "urn:li:messagingMessage:2-...",
        "conversationUrn": "urn:li:msg_conversation:(...)",
        "deliveredAt": "1784478668446",
        "bodyText": "Hey, we launched a new version of our product...",
        "originToken": "f7f4fe26-31b1-483b-b82d-a7f0533a4a56",
        "senderHostIdentityUrn": "urn:li:fsd_profile:YOUR_VIEWER_ID",
        "senderFirstName": "Jane",
        "senderLastName": "Doe"
      }
    }
  ],
  "sequenceId": "YOUR_SEQUENCE_ID"
}
```

## Sales Navigator Message Threads

This endpoint retrieves a list of Sales Navigator inbox threads.

The `viewer_id` parameter is required and must be the LinkedIn ID of the account you would like to use to read messages.

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request

`GET https://api.lix-it.com/v1/li/sales/messages/threads`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to use to read messages.

#### Optional Parameters

Parameter | Description
--------- | -----------
filter | The inbox filter. Defaults to `INBOX`.
count | The number of threads to return. Defaults to `20`.
page_starts_at | A timestamp cursor for paginating threads. Omit for the first page and pass the `nextPageStartsAt` value from the last thread of the previous page for subsequent pages.

```shell
curl "https://api.lix-it.com/v1/li/sales/messages/threads?viewer_id=ACwAAAd2ql0BjIz3QGaG7pMbLYAJTx3fnRcE8-U" \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "https://api.lix-it.com/v1/li/sales/messages/threads?viewer_id=ACwAAAd2ql0BjIz3QGaG7pMbLYAJTx3fnRcE8-U"

headers = {
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers)

print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "entityUrn": "urn:li:collectionResponse:PopkTstlxyeYnbhlfZ+d6lNy7REhOw2OZvOIwW4GP3A=",
    "elements": [
      {
        "id": "2-YWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==",
        "nextPageStartsAt": 1783442049093,
        "totalMessageCount": 3,
        "unreadMessageCount": 0,
        "archived": false,
        "messages": [
          {
            "id": "2-MTc4MzQ0MjA0OTA5NGIyNjM0OS0xMDAmYWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==",
            "type": "INMAIL",
            "body": "Hi, just reaching out.",
            "deliveredAt": 1783442049094
          }
        ],
        "participants": [
          "urn:li:fs_salesProfile:(ACwAADsVyAUBSlwfupCn2OxQAEXgNtvpQ7WMdjE,NAME_SEARCH,sSow)"
        ]
      }
    ]
  },
  "included": [
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "fullName": "Jane Doe",
      "objectUrn": "urn:li:member:123456789"
    }
  ]
}
```

## Sales Navigator Message Thread

This endpoint retrieves a single Sales Navigator message thread by `thread_id`.

The `viewer_id` parameter is required and must be the LinkedIn ID of the account you would like to use to read messages.

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request

`GET https://api.lix-it.com/v1/li/sales/messages/threads/{thread_id}`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
thread_id | The ID of the thread to retrieve. This is a path parameter.
viewer_id | The LinkedIn ID of the account you would like to use to read messages.

#### Optional Parameters

Parameter | Description
--------- | -----------
count | Defaults to `1`.
message_count | The number of messages to return in the thread. Defaults to `10`.

```shell
curl "https://api.lix-it.com/v1/li/sales/messages/threads/2-YWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==?viewer_id=ACwAAAd2ql0BjIz3QGaG7pMbLYAJTx3fnRcE8-U" \
  -H "Authorization: lixApiKey"
```

```python
import requests

url = "https://api.lix-it.com/v1/li/sales/messages/threads/2-YWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==?viewer_id=ACwAAAd2ql0BjIz3QGaG7pMbLYAJTx3fnRcE8-U"

headers = {
  'Authorization': lix_api_key
}

response = requests.request("GET", url, headers=headers)

print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": "2-YWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==",
    "totalMessageCount": 3,
    "unreadMessageCount": 0,
    "archived": false,
    "messages": [
      {
        "id": "2-MTc4MzQ0MjA0OTA5NGIyNjM0OS0xMDAmYWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==",
        "type": "INMAIL",
        "body": "Hi, just reaching out.",
        "deliveredAt": 1783442049094
      }
    ],
    "participants": [
      "urn:li:fs_salesProfile:(ACwAADsVyAUBSlwfupCn2OxQAEXgNtvpQ7WMdjE,NAME_SEARCH,sSow)"
    ]
  },
  "included": [
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "fullName": "Jane Doe",
      "objectUrn": "urn:li:member:123456789"
    }
  ]
}
```

## Send a Sales Navigator Message

This endpoint sends a Sales Navigator message to an existing thread.

The `viewer_id` query parameter is required and must be the LinkedIn ID of the account you would like to use to send the message.

<aside class="notice"> Uses 1 Standard Credit.</aside>

### HTTP Request

`POST https://api.lix-it.com/v1/li/sales/messages`

### URL Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to use to send the message.

### Body Parameters

#### Required Parameters

Parameter | Description
--------- | -----------
thread_id | The ID of the thread to send the message to.
body | The message body.

#### Optional Parameters

Parameter | Description
--------- | -----------
subject | The message subject.
copy_to_crm | Whether to copy the message to a connected CRM. Defaults to `false`.

```shell
curl -X POST "https://api.lix-it.com/v1/li/sales/messages?viewer_id=ACwAAAd2ql0BjIz3QGaG7pMbLYAJTx3fnRcE8-U" \
  -H "Authorization: lixApiKey" \
  -H "Content-Type: application/json" \
  -d '{"thread_id":"2-YWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==","body":"Hi, just reaching out."}'
```

```python
import requests

url = "https://api.lix-it.com/v1/li/sales/messages?viewer_id=ACwAAAd2ql0BjIz3QGaG7pMbLYAJTx3fnRcE8-U"

payload = {
    "thread_id": "2-YWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==",
    "body": "Hi, just reaching out."
}

headers = {
  'Content-type': 'application/json',
  'Authorization': lix_api_key
}

response = requests.request("POST", url, headers=headers, json=payload)

print(response.json())
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": "2-YWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==",
    "totalMessageCount": 4,
    "unreadMessageCount": 0,
    "messages": [
      {
        "id": "2-MTc4MzQ0MjA0OTA5NGIyNjM0OS0xMDAmYWM0MmFiNmItZWM3My00MDYyLWIyZjgtNDE0NDMwNmVlOTExXzEwMA==",
        "type": "INMAIL",
        "body": "Hi, just reaching out.",
        "deliveredAt": 1783442049094
      }
    ]
  },
  "included": []
}
```
