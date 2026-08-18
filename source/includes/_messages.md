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
viewer_id | The LinkedIn ID of the account you would like to view this conversation as.
conversation_urn | The LinkedIn conversation URN, e.g. `urn:li:msg_conversation:(urn:li:fsd_profile:<viewer_id>,<conversation_id>)`.

#### Optional Parameters

Parameter | Default | Description
--------- | ------- | -----------
sync_token | | A sync token returned from a previous request. Omit for the initial load.
delivered_at | | A timestamp anchor for pagination around a specific message.
count_before | 0 | Number of messages to load before the anchor.
count_after | 0 | Number of messages to load after the anchor.

```shell
curl "https://api.lix-it.com/v1/li/messages?viewer_id=ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4&conversation_urn=urn%3Ali%3Amsg_conversation%3A%28urn%3Ali%3Afsd_profile%3AACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4%2C2-OGFlYjMwMDItZmZhYS00YmI0LTgxNDEtN2JiNTQ1MzIxODFkXzEwMA%3D%3D%29" \
  -H "Authorization: lixApiKey"
```

```python
import requests
import urllib.parse

conversation_urn = "urn:li:msg_conversation:(urn:li:fsd_profile:ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4,2-OGFlYjMwMDItZmZhYS00YmI0LTgxNDEtN2JiNTQ1MzIxODFkXzEwMA==)"
encoded_urn = urllib.parse.quote(conversation_urn, safe='')

url = f"https://api.lix-it.com/v1/li/messages?viewer_id=ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4&conversation_urn={encoded_urn}"

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
      "bodyText": "Hey Lars, we launched a new version of OpenLore...",
      "originToken": "f7f4fe26-31b1-483b-b82d-a7f0533a4a56",
      "senderHostIdentityUrn": "urn:li:fsd_profile:ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4",
      "senderFirstName": "Adil",
      "senderLastName": "A",
      "senderHeadline": "CEO at Lix",
      "senderProfileUrl": "https://www.linkedin.com/in/adil-a-...",
      "senderPublicIdentifier": "adil-a-...",
      "senderProfilePictureUrl": "https://media.licdn.com/dms/image/..."
    }
  ],
  "syncToken": "..."
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
viewer_id | The LinkedIn ID of the account you would like to send the message as.

### Body Parameters

Parameter | Description
--------- | -----------
conversation_urn | The LinkedIn conversation URN.
body | The message text to send.

```shell
curl -X POST "https://api.lix-it.com/v1/li/messages?viewer_id=ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4" \
  -H "Authorization: lixApiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "conversation_urn": "urn:li:msg_conversation:(urn:li:fsd_profile:ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4,2-OGFlYjMwMDItZmZhYS00YmI0LTgxNDEtN2JiNTQ1MzIxODFkXzEwMA==)",
    "body": "Hey Lars, we launched a new version of OpenLore with Google OKF support."
  }'
```

```python
import requests

url = "https://api.lix-it.com/v1/li/messages?viewer_id=ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4"

payload = {
  "conversation_urn": "urn:li:msg_conversation:(urn:li:fsd_profile:ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4,2-OGFlYjMwMDItZmZhYS00YmI0LTgxNDEtN2JiNTQ1MzIxODFkXzEwMA==)",
  "body": "Hey Lars, we launched a new version of OpenLore with Google OKF support."
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
    "bodyText": "Hey Lars, we launched a new version of OpenLore...",
    "originToken": "f7f4fe26-31b1-483b-b82d-a7f0533a4a56",
    "senderHostIdentityUrn": "urn:li:fsd_profile:ACoAABo4FvUBi32WkuNris96r_pxCYv_g1GWYA4"
  }
}
```
