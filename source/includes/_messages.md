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
