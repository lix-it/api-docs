# Enrichment API

This section describes the data you can expect from each returned profile. The same profile data structure will be returned from multiple profile collection endpoints as described below. Credit usage is dependent on the endpoint used.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5140183-9a686ca7-a917-415b-bba4-071ccff66158?action=collection%2Ffork&collection-url=entityId%3D5140183-9a686ca7-a917-415b-bba4-071ccff66158%26entityType%3Dcollection%26workspaceId%3Dcc78921f-4152-4fc0-9c2f-75ef5c7a5895)

<aside class="notice">
Please be aware if some data points of profiles do not exist, these will be returned as null.
</aside>

## Job Posting

<aside class="notice">
Uses 1 Standard Credit.
</aside>

This endpoint retrieves a single publicly available LinkedIn Job Posting.

<aside class="notice">
Please be aware if some data points do not exist, these will be returned as null.
</aside>

### HTTP Request

`GET https://api.lix-it.com/v1/enrich/job`

### URL Parameters

#### Required parameters

Parameter | Description
--------- | -----------
job_id | The LinkedIn ID of the job posting

#### Optional parameters

Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this profile as

```python
import requests

url = "https://api.lix-it.com/v1/enrich/job?job_id=3556453411"

payload={}
headers = {
  'Authorization': [lixApiKey]
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.json())
```

```shell
curl "https://api.lix-it.com/v1/enrich/job?job_id=3556453411" \
  -H "Authorization: lixApiKey"
```

## Post

<aside class="notice">
Uses 1 Standard Credit.
</aside>

This endpoint retrieves a single publicly available LinkedIn Feed Update (Post).

<aside class="notice">
Please be aware if some data points do not exist, these will be returned as null.
</aside>

### HTTP Request

`GET https://api.lix-it.com/v1/enrich/post`

### URL Parameters

#### Required parameters

Parameter | Description
--------- | -----------
post_urn | The LinkedIn URN of the post, URI encoded. For example `urn%3Ali%3Aactivity%3A7019605025920286720`, which is the URI-encoded form of `urn:li:activity:7019605025920286720`. You can find these post URNs in the response to the Posts Search API.

#### Optional parameters

Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this post as.

```python
import requests

url = "https://api.lix-it.com/v1/enrich/post?post_urn=urn%3Ali%3Aactivity%3A7019605025920286720"

payload={}
headers = {
  'Authorization': [lixApiKey]
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.json())
```

```shell
curl "https://api.lix-it.com/v1/enrich/post?post_urn=urn%3Ali%3Aactivity%3A7019605025920286720" \
  -H "Authorization: lixApiKey"
```

## Person

<aside class="notice">
Uses 1 Standard Credit.
</aside>

```python
import requests

url = "https://api.lix-it.com/v1/person?sales_nav_id=ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg"

payload={}
headers = {
  'Authorization': [lixApiKey]
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.json())
```

```shell
curl "https://api.lix-it.com/v1/person?sales_nav_id=ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg" \
  -H "Authorization: lixApiKey"
```

> The above command returns JSON structured like this:

```json
{
    "description": "Co-founder | Product & Growth Lead",
    "location": "London, England, United Kingdom",
    "name": "Alfie Lambert",
    "twitter": "AlfieLambert",
    "aboutSummaryText": "In my early 20s, I realised I was going nowhere fast. I applied to an access course, received a 100% distinction rate and got into Cambridge University (#1 in the world rankings that year). While there, I fell into marketing startups and fell in love. \n\nSince University I've worked with startups and scale-ups, primarily in B2B data, AI & Data Science. I've trained and retrained in a few different disciplines, cofounded two startups and successfully raised funds. I'm at my happiest when I'm solving problems and making things happen.",
    "salesNavLink": "https://linkedin.com/sales/lead/ACoAAAXQSFkBYBAvJOtLzKQz7X0qXjByqI9m7Tg,NAME_SEARCH,undefined",
    "link": "https://www.linkedin.com/in/alfie-lambert",
    "experience": [
        {
            "description": "Eliminate hours spent combing through disconnected data. BizCrunch provides insights like debt-to-asset ratios, estimated turnover and ownerships structures, right from the start. Freeing up your time to make contact, forge relationships and close deals.",
            "title": "Co-founder & Head of Growth",
            "dateStarted": "April 2023",
            "dateEnded": "Present",
            "location": "London, England, United Kingdom",
            "organisation": {
                "name": "BizCrunch",
                "salesNavLink": "https://linkedin.com/sales/company/96199986"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 4,
                    "year": 2023
                },
                "endedOn": {}
            }
        },
        {
            "description": "Lix provides industry-leading contact intelligence technology to sales teams, marketers and business intelligence professionals around the world. Our primary goal is simple: bring Contact Intelligence into the business mainstream. \n\nSales teams, especially those in fast-growing b2b SaaS businesses, need an alternative to broad-brush leads lists. They need more information about the people they are selling to. They need to spend less time hunting for leads and inputting contact information. They need to spend more time doing what they do best: selling.",
            "title": "Director",
            "dateStarted": "November 2020",
            "dateEnded": "Present",
            "location": "London, England, United Kingdom",
            "organisation": {
                "name": "Lix",
                "salesNavLink": "https://linkedin.com/sales/company/1670390"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 11,
                    "year": 2020
                },
                "endedOn": {}
            }
        },
        {
            "description": "Our speciality lies at the intersection of performance marketing and immaculate presentation. We understand what powers real growth: marrying our expertise with an intimate knowledge of your business to create tailored solutions to your most pressing problems. \n\nWith shared backgrounds in growth hacking, automation, graphic design, video editing and startup & scale-up marketing we can provide a full solution for your business - or we can dip in and solve individual problems as needed.",
            "title": "Growth Consultant",
            "dateStarted": "March 2018",
            "dateEnded": "November 2020",
            "location": "London, England, United Kingdom",
            "organisation": {
                "name": "Lambert & Bizzle",
                "salesNavLink": "https://linkedin.com/sales/company/27220374"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 3,
                    "year": 2018
                },
                "endedOn": {
                    "month": 11,
                    "year": 2020
                }
            }
        },
        {
            "description": "Last year saw 10,000 revellers at S&C - a 10 fold increase from when I started less than 4 years ago. We have struck 6-figure partnerships with household names, been featured in every national newspaper and radio station worth mentioning and become a mainstay of the festival scene. ",
            "title": "Director of Marketing and Communications",
            "dateStarted": "July 2014",
            "dateEnded": "March 2018",
            "location": "Cambridge, United Kingdom",
            "organisation": {
                "name": "Strawberries & Creem Festival",
                "salesNavLink": "https://linkedin.com/sales/company/"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 7,
                    "year": 2014
                },
                "endedOn": {
                    "month": 3,
                    "year": 2018
                }
            }
        },
        {
            "description": "Pivigo is passionate about what the data revolution will bring to the commercial and public sectors. Data science can, and will, impact every industry. It is only a matter of time before every company will employ data science in their business, and those that start earlier will have a strategic advantage.\n\nAs the data science hub, Pivigo is at the cutting edge of a flourishing industry. We provide all the tools for those looking to a career in data science, from leading training (S2DS) to resources and challenges. For business, we can help you identify what data could do for you and connect you with the skilled practitioners to deliver on that goal.",
            "title": "Growth Hacker",
            "dateStarted": "February 2017",
            "dateEnded": "December 2017",
            "location": "London, United Kingdom",
            "organisation": {
                "name": "Pivigo",
                "salesNavLink": "https://linkedin.com/sales/company/3336261"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 2,
                    "year": 2017
                },
                "endedOn": {
                    "month": 12,
                    "year": 2017
                }
            }
        },
        {
            "description": "CityMunch is a two-sided marketplace looking to connect savvy consumers with eager restaurateurs. We are putting the power into their hands, helping restaurants fill their seats and customers fill their stomachs. \n\nFor consumers, the mobile app allows anyone with time on their hands to explore London's food scene without breaking the bank. CityMunch offers free real-time discount vouchers across 250+ restaurants in London. \n\nFor restaurants, a simple web-based platform helps fill spare tables during quiet periods.\n\nAs CMO of a new and fledgling company, all processes had to be started from scratch; immediately designing and implementing a full media and communications strategy that has continued to be the foundation of all their b2c communication. \n\nDuring my tenure, the user base increased by +48% and the daily covers (our key metric) rocketed 10x: from 5 on the day that I started to 52 on the day that I left. The average daily validations grew from 6 to 40. \n\nDAU (Daily Average Users) increased by +315.6%, Daily Engagement rose by +532%, Sessions Per User +18%, Daily Engagement Per User +52% \n\nMy communications work led to CityMunch receiving a prominent specialist feature in the Daily Telegraph, as well as coverage in other major news outlets and online channels",
            "title": "Chief Marketing Officer",
            "dateStarted": "October 2016",
            "dateEnded": "January 2017",
            "location": "London, United Kingdom",
            "organisation": {
                "name": "CityMunch",
                "salesNavLink": "https://linkedin.com/sales/company/10404364"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 10,
                    "year": 2016
                },
                "endedOn": {
                    "month": 1,
                    "year": 2017
                }
            }
        },
        {
            "description": "In addition to reading for my degree, I currently write articles and submit them on a freelance basis to a number of publications including: BRIC - A high-end glossy political publication focusing on the emerging BRIC nations. Croco - An arts and lifestyle magazine originally based in Spain; I was approached by the editor to assist in targeting UK music artists and scenes in order to help them bridge the gap into a new market. DV8 - A sneaker-based fashion magazine based in London.",
            "title": "Freelance Journalist",
            "dateStarted": "October 2013",
            "dateEnded": "July 2016",
            "location": "London, United Kingdom",
            "organisation": {
                "name": "Freelance Journalism",
                "salesNavLink": "https://linkedin.com/sales/company/851430"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 10,
                    "year": 2013
                },
                "endedOn": {
                    "month": 7,
                    "year": 2016
                }
            }
        },
        {
            "description": "As editor of the music section for the Cambridge Tab I chase leads, find stories and commission writers to cover all aspects of the music scene in and around the University.\n\nDuring my time as editor over the busy May Ball period I successfully negotiated exclusive coverage with the vast majority of Cambridge colleges for their headline act announcements - putting The Tab music way ahead of the pack of student papers in terms of hits, readership and content sharing. I am consistently within the Top 100 journalists Nationwide and often in the Top 20 / Top 10.",
            "title": "Music Editor",
            "dateStarted": "May 2015",
            "dateEnded": "January 2016",
            "location": "Cambridge, United Kingdom",
            "organisation": {
                "name": "The Tab",
                "salesNavLink": "https://linkedin.com/sales/company/2845456"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 5,
                    "year": 2015
                },
                "endedOn": {
                    "month": 1,
                    "year": 2016
                }
            }
        },
        {
            "description": "As a new start-up, Future Coins needed a fast and powerful media strategy. I arranged for Joel Moss to be interviewed, along with our product, by: CNN, Al-Jazeera, The Telegraph, Time Out, Vice and a number of industry publications. Our social media presence grew in both quality and quantity, with targeted marketing through Facebook a great success when looking to reach out to tech savvy 20-somethings in the London area. As well as building awareness for our initial installation in London, I also put together a marketing plan based on bitcoin usage data against population and sought out other areas of the UK to install our units. I successful brokered the deal with the host of our unit in Brighton, which was the first in the city attracting attention from the BBC and local press.",
            "title": "CMO",
            "dateStarted": "April 2013",
            "dateEnded": "January 2015",
            "location": "London, United Kingdom",
            "organisation": {
                "name": "Futurecoins",
                "salesNavLink": "https://linkedin.com/sales/company/3800942"
            },
            "timePeriod": {
                "startedOn": {
                    "month": 4,
                    "year": 2013
                },
                "endedOn": {
                    "month": 1,
                    "year": 2015
                }
            }
        },
        {
            "description": "Producing articles for both online & a print run of 50k. I also interview artists (both written and on camera), as well as contributing to comedy sketch writing.",
            "title": "Journalist & Section editor",
            "dateStarted": "2013",
            "dateEnded": "2013",
            "location": "London, United Kingdom",
            "organisation": {
                "name": "The Guestlist Network",
                "salesNavLink": "https://linkedin.com/sales/company/1296823"
            },
            "timePeriod": {
                "startedOn": {
                    "year": 2013
                },
                "endedOn": {
                    "year": 2013
                }
            }
        }
    ],
    "education": [
        {
            "institutionName": "University of Cambridge",
            "degree": "Bachelor's degree",
            "fieldOfStudy": "Human, Social & Political Sciences",
            "dateStarted": "2013",
            "dateEnded": "2016",
            "timePeriod": {
                "startedOn": {
                    "year": 2013
                },
                "endedOn": {
                    "year": 2016
                }
            }
        },
        {
            "institutionName": "City and Islington College",
            "degree": "Access Diploma",
            "fieldOfStudy": "Mixed Media",
            "dateStarted": "2012",
            "dateEnded": "2013",
            "timePeriod": {
                "startedOn": {
                    "year": 2012
                },
                "endedOn": {
                    "year": 2013
                }
            }
        }
    ],
    "skills": [
        {
            "name": "Social Media",
            "numOfEndorsement": "57"
        },
        {
            "name": "Email Marketing",
            "numOfEndorsement": "40"
        },
        {
            "name": "New Business Development",
            "numOfEndorsement": "20"
        },
        {
            "name": "Social Media Marketing",
            "numOfEndorsement": "47"
        },
        {
            "name": "Blogging",
            "numOfEndorsement": "21"
        },
        {
            "name": "Account Management",
            "numOfEndorsement": "12"
        },
        {
            "name": "Customer Service",
            "numOfEndorsement": "16"
        },
        {
            "name": "Marketing Communications",
            "numOfEndorsement": "16"
        },
        {
            "name": "Customer Relations",
            "numOfEndorsement": "10"
        },
        {
            "name": "Digital Media",
            "numOfEndorsement": "15"
        },
        {
            "name": "Press Releases",
            "numOfEndorsement": "10"
        },
        {
            "name": "Advertising Sales",
            "numOfEndorsement": "7"
        },
        {
            "name": "Copywriting",
            "numOfEndorsement": "10"
        },
        {
            "name": "Publishing",
            "numOfEndorsement": "9"
        },
        {
            "name": "Content Management",
            "numOfEndorsement": "6"
        },
        {
            "name": "Graduate Recruitment",
            "numOfEndorsement": "10"
        },
        {
            "name": "Management",
            "numOfEndorsement": "20"
        },
        {
            "name": "Microsoft Office",
            "numOfEndorsement": "9"
        },
        {
            "name": "Event Management",
            "numOfEndorsement": "13"
        },
        {
            "name": "Sales",
            "numOfEndorsement": "10"
        },
        {
            "name": "Digital Marketing",
            "numOfEndorsement": "7"
        },
        {
            "name": "Marketing Strategy",
            "numOfEndorsement": "7"
        },
        {
            "name": "Writing",
            "numOfEndorsement": "13"
        },
        {
            "name": "Editing",
            "numOfEndorsement": "6"
        },
        {
            "name": "Media Relations",
            "numOfEndorsement": "9"
        },
        {
            "name": "Time Management",
            "numOfEndorsement": "4"
        },
        {
            "name": "Interviewing",
            "numOfEndorsement": "4"
        },
        {
            "name": "Leadership",
            "numOfEndorsement": "4"
        },
        {
            "name": "Teamwork",
            "numOfEndorsement": "4"
        },
        {
            "name": "Facebook",
            "numOfEndorsement": "6"
        },
        {
            "name": "Journalism",
            "numOfEndorsement": "5"
        },
        {
            "name": "Advertising",
            "numOfEndorsement": "6"
        },
        {
            "name": "Online Marketing",
            "numOfEndorsement": "5"
        },
        {
            "name": "Online Advertising",
            "numOfEndorsement": "5"
        },
        {
            "name": "Public Relations",
            "numOfEndorsement": "5"
        },
        {
            "name": "Team Leadership",
            "numOfEndorsement": "5"
        },
        {
            "name": "Business Strategy",
            "numOfEndorsement": "5"
        },
        {
            "name": "Training",
            "numOfEndorsement": "4"
        },
        {
            "name": "Microsoft Excel",
            "numOfEndorsement": "4"
        },
        {
            "name": "Strategy",
            "numOfEndorsement": "5"
        },
        {
            "name": "Public Speaking",
            "numOfEndorsement": "4"
        },
        {
            "name": "Digital Strategy",
            "numOfEndorsement": "5"
        },
        {
            "name": "Negotiation",
            "numOfEndorsement": "4"
        },
        {
            "name": "Microsoft Word",
            "numOfEndorsement": "4"
        },
        {
            "name": "Market Research",
            "numOfEndorsement": "5"
        },
        {
            "name": "Publications",
            "numOfEndorsement": "5"
        },
        {
            "name": "Research",
            "numOfEndorsement": "5"
        },
        {
            "name": "Networking",
            "numOfEndorsement": "4"
        },
        {
            "name": "Storytelling",
            "numOfEndorsement": "10"
        },
        {
            "name": "Team Management",
            "numOfEndorsement": "4"
        }
    ]
}
```

This endpoint retrieves a specific profile.

### HTTP Request

`GET https://api.lix-it.com/v1/person`

### URL Parameters

Parameter | Description
--------- | -----------
sales_nav_id | The Sales Navigator ID of the person. You can obtain this from the Person IDs disambiguation endpoint at `/v1/person/ids`

#### Optional parameters

Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this profile as


## Organisation
<aside class="notice">
Uses 1 Organisation credit.
</aside>

```python
import requests

url = "https://api.lix-it.com/v1/organisations/by-linkedin?linkedin_url=https://linkedin.com/company/linkedin"

payload={}
headers = {
  'Authorization': [lixApiKey]
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.json())
```

```shell
curl "https://api.lix-it.com/v1/organisations/by-linkedin?linkedin_url=https://linkedin.com/company/linkedin" \
  -H "Authorization: lixApiKey"
```

> The above command returns JSON structured like this:

```json
{
    "liOrganisation": {
        "name": "LinkedIn",
        "link": "https://www.linkedin.com/company/linkedin",
        "industry": "Computer Software",
        "website": "https://careers.linkedin.com",
        "description": "Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide, including executives from every Fortune 500 company, LinkedIn is the world's largest professional network. The company has a diversified business model with revenue coming from Talent Solutions, Marketing Solutions, Sales Solutions and Premium Subscriptions products. Headquartered in Silicon Valley, LinkedIn has offices across the globe.",
        "headquarters": "Sunnyvale, US",
        "companyType": "Public Company",
        "liEmployeeCount": "26383",
        "size": "10001+",
        "specialities": "Online Professional Network, Jobs, People Search, Company Search, Address Book, Advertising, Professional Identity, Group Collaboration, Recruiting",
        "numberOfInvestmentRounds": "7",
        "followers": "25072627",
        "crunchbaseId": "linkedin",
        "salesNavLink": "https://www.linkedin.com/sales/accounts/insights?companyId=1337&trk=li_comp_page",
        "logoUrl": "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_",
    }
}
```

This endpoint retrieves a specific profile.

### HTTP Request

`GET https://api.lix-it.com/v1/organisations/by-linkedin`

### URL Parameters

Parameter | Description
--------- | -----------
linkedin_url | The link to the profile of the company
sales_nav_url | The link to the Sales Navigator profile for the company

#### Optional parameters

Parameter | Description
--------- | -----------
viewer_id | The LinkedIn ID of the account you would like to view this organisation as
# Post Comments

Get comments for a LinkedIn post by URN.

## HTTP Request

`GET https://api.lix-it.com/v1/enrich/post/comments`

## Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
post_urn | | **Required.** The LinkedIn post URN.
viewer_id | | The LinkedIn viewer ID.
start | 0 | Starting index for pagination.
pagination_token | | Token for pagination continuation.

## Response

> The above command returns JSON structured like this:

```json
{
  "comments": [
    {
      "comment_urn": "urn:li:comment:123456789",
      "text": "Great insights! Thanks for sharing this valuable information.",
      "permalink": "https://www.linkedin.com/feed/update/urn:li:activity:7123456789012345678?commentUrn=urn:li:comment:123456789",
      "created_at": "2024-01-15T10:30:00Z",
      "post_urn": "urn:li:activity:7123456789012345678",
      "num_reactions": 5,
      "num_replies": 2,
      "author": {
        "name": "Jane Smith",
        "link": "https://www.linkedin.com/in/janesmith",
        "li_id": "jane-smith-123",
        "headline": "Senior Software Engineer at TechCorp",
        "profile_image_url": "https://media.licdn.com/dms/image/example/profile.jpg"
      },
      "reaction_breakdown": [
        {
          "reaction_type": "LIKE",
          "count": 3
        },
        {
          "reaction_type": "INSIGHTFUL",
          "count": 2
        }
      ]
    },
    {
      "comment_urn": "urn:li:comment:987654321",
      "text": "I completely agree with your analysis. This trend is definitely worth watching.",
      "permalink": "https://www.linkedin.com/feed/update/urn:li:activity:7123456789012345678?commentUrn=urn:li:comment:987654321",
      "created_at": "2024-01-14T16:30:00Z",
      "post_urn": "urn:li:activity:7123456789012345678",
      "num_reactions": 3,
      "num_replies": 1,
      "author": {
        "name": "John Doe",
        "link": "https://www.linkedin.com/in/johndoe",
        "li_id": "john-doe-456",
        "headline": "Product Manager at InnovateCorp",
        "profile_image_url": "https://media.licdn.com/dms/image/example/profile2.jpg"
      },
      "reaction_breakdown": [
        {
          "reaction_type": "LIKE",
          "count": 2
        },
        {
          "reaction_type": "CELEBRATE",
          "count": 1
        }
      ]
    }
  ],
  "paging": {
    "total": 15,
    "start": 0,
    "count": 10
  },
  "pagination_token": "AQEDAQEDARIAAAFnY2VkZWY...",
  "source": "LINKEDIN_API"
}
```
