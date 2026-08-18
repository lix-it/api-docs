# LinkedIn Conversations API

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
