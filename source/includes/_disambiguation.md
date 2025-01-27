# Disambiguation API

## Person IDs

This endpoint retrieves ids for various B2B data products. You query it using an ID and it will fetch the ids.

You can use this endpoint to convert LinkedIn Sales Navigator profile URLs to LinkedIn profile URLs and vice versa.

### The PersonIDs Object
Attribute | Description
--------- | -----------
personIds.li_flagship_id | The ID of the 'Flagship' LinkedIn profile. You can create a profile URL by passing in `https://www.linkedin.com/in/[liFlagshipID]`.
personIds.sales_nav_id     | The Sales Navigator ID. You can create a profile URL by passing in `https://www.linkedin.com/sales/people/[salesNavID],NAME,undefined`.
personIds.uuid     | The unique Lix UUID for this person.

links.liProfileURL | The LinkedIn profile URL.
links.salesNavURL | The Sales Navigator profile URL.
links.recruiterURL | The Recruiter profile URL.

```shell
{
    "personIds": {
        "liID": "alfie-lambert",
        "salesNavID": "ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg",
        "uuid": "cGVyc29uOjk3MDgyNQ=="
    },
    "links": {
        "liProfileURL": "https://www.linkedin.com/in/alfie-lambert",
        "salesNavURL": "https://www.linkedin.com/sales/people/ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg,NAME",
        "recruiterURL": "https://www.linkedin.com/talent/profile/ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg"
    }
}
```

### Get PersonIDs

Retrieve the Person IDs. Pass in any ID you would like to cross-reference, but only pass one in. 

<aside class="notice"> Uses 1 Org Credit.</aside>

`GET https://api.lix-it.com/v1/person/ids`

Parameter | Description
--------- | -----------
sales_nav_id | The Sales Nav ID of the person. You can find this from a profile link: `https://www.linkedin.com/sales/person/[sales_nav_id],NAME,XXXX`
li_flagship_id | The Linkedin profile public identifier. You can find this from a profile link: `https://www.linkedin.com/in/[li_flagship_id]`
lix_id | The Lix unique ID.

```shell
curl "https://api.lix-it.com/v1/person/ids?li_flagship_id=alfie-lambert" \
  -H "Authorization: [lixApiKey]"
```

> Returns:

```json
{
 "person_ids": {
  "liID": "alfie-lambert",
  "salesNavID": "ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg",
  "lixID": "cGVyc29uOjk3MDgyNQ=="
 }
}
```

## Organisation IDs

This endpoint retrieves ids for various B2B data products. You query it using an ID and it will fetch the ids.

You can use this endpoint to convert LinkedIn Sales Navigator profile URLs to LinkedIn profile URLs and vice versa.

### The OrganisationIDs Object

Attribute | Description
--------- | -----------
li_flagship_id | The ID of the 'Flagship' LinkedIn profile. You can create a profile URL by passing in `https://www.linkedin.com/company/[liFlagshipID]`.
sales_nav_id     | The Sales Navigator ID. You can create a profile URL by passing in `https://www.linkedin.com/sales/people/[salesNavID],NAME,undefined`.
lix_id     | The unique Lix ID for this organisation.

```shell
{
    "id": "59688920",
    "name": "Lix",
    "liID": "lix",
    "salesNavID": "1670390",
    "uuid": "b3JnYW5pc2F0aW9uOjA="
}
```

### Get OrganisationIDs

Retrieve the Organisation IDs. Pass in any ID you would like to cross-reference, but only pass one in. 

<aside class="notice">This endpoint uses 1 Org credit</aside>

`GET https://api.lix-it.com/v1/organisation/ids`

Parameter | Description
--------- | -----------
sales_nav_id | The Sales Nav ID of the organisation. You can find this from a profile link: `https://www.linkedin.com/sales/company/[sales_nav_id]`
li_flagship_id | The Linkedin profile public identifier. You can find this from a profile link: `https://www.linkedin.com/company/[li_flagship_id]`
lix_id | The Lix unique ID.

```shell
curl "https://api.lix-it.com/v1/organisation/ids?li_flagship_id=lix" \
  -H "Authorization: [lixApiKey]"
```

> Returns:

```json
{
  "organisationIds": {
      "id": "59688920",
      "name": "Lix",
      "liID": "lix",
      "salesNavID": "1670390",
      "uuid": "b3JnYW5pc2F0aW9uOjA="
  }
}
```
