# Enrichment API

This section describes the data you can expect from each returned profile. The same profile data structure will be returned from multiple profile collection endpoints as described below. Each profile is equivalent to 1 credit.

<aside class="notice">
Please be aware if some data points of profiles do not exist, these will be returned as null.
</aside>

## Job Posting

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

url = "https://api.lix-it.com/v1/enrich/job?profile_link=https://linkedin.com/in/alfie-lambert"

payload={}
headers = {
  'Authorization': [lixApiKey]
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

```shell
curl "https://api.lix-it.com/v1/enrich/job?profile_link=https://linkedin.com/in/alfie-lambert" \
  -H "Authorization: lixApiKey"
```

## Person

```python
import requests

url = "https://api.lix-it.com/v1/person?profile_link=https://linkedin.com/in/alfie-lambert"

payload={}
headers = {
  'Authorization': [lixApiKey]
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

```shell
curl "https://api.lix-it.com/v1/api/person?profile_link=https://linkedin.com/in/alfie-lambert" \
  -H "Authorization: lixApiKey"
```

> The above command returns JSON structured like this:

```json
{"fullName":"Alfie Lambert","headline":"Co-founder at Lix","summary":"Building the cybernetic sales workforce by connecting all software with verified, actionable B2B data. 🤖","location":"London, England, United Kingdom","emails":[""],"socialAccounts":{"linkedin":{"username":"alfie-lambert","url":"https://www.linkedin.com/in/alfie-lambert"},"twitter":{"username":"AlfieLambert"}},"workExperiences":[{"organisation":{"name":"Lix","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"Co-founder","description":"Lix provides industry-leading contact intelligence technology to sales teams, marketers and business intelligence professionals around the world. Our primary goal is simple: bring Contact Intelligence into the business mainstream. \n\nSales teams, especially those in fast-growing b2b SaaS businesses, need an alternative to broad-brush leads lists. They need more information about the people they are selling to. They need to spend less time hunting for leads and inputting contact information. They need to spend more time doing what they do best: selling.","location":"London, England, United Kingdom","startedOn":{"year":2020,"month":11},"endedOn":{}},{"organisation":{"name":"Lambert \u0026 Bizzle","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"Growth Consultant","description":"Our speciality lies at the intersection of performance marketing and immaculate presentation. We understand what powers real growth: marrying our expertise with an intimate knowledge of your business to create tailored solutions to your most pressing problems. \n\nWith shared backgrounds in growth hacking, automation, graphic design, video editing and startup \u0026 scale-up marketing we can provide a full solution for your business - or we can dip in and solve individual problems as needed.","location":"London, England, United Kingdom","startedOn":{"year":2018,"month":3},"endedOn":{"year":2020,"month":11}},{"organisation":{"name":"Strawberries \u0026 Creem Festival","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"Director of Marketing and Communications","description":"Last year saw 10,000 revellers at S\u0026C - a 10 fold increase from when I started less than 4 years ago. We have struck 6-figure partnerships with household names, been featured in every national newspaper and radio station worth mentioning and become a mainstay of the festival scene. ","location":"Cambridge, United Kingdom","startedOn":{"year":2014,"month":7},"endedOn":{"year":2018,"month":3}},{"organisation":{"name":"Pivigo","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"Growth Hacker","description":"Pivigo is passionate about what the data revolution will bring to the commercial and public sectors. Data science can, and will, impact every industry. It is only a matter of time before every company will employ data science in their business, and those that start earlier will have a strategic advantage.\n\nAs the data science hub, Pivigo is at the cutting edge of a flourishing industry. We provide all the tools for those looking to a career in data science, from leading training (S2DS) to resources and challenges. For business, we can help you identify what data could do for you and connect you with the skilled practitioners to deliver on that goal.","location":"London, United Kingdom","startedOn":{"year":2017,"month":2},"endedOn":{"year":2017,"month":12}},{"organisation":{"name":"CityMunch","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"Chief Marketing Officer","description":"CityMunch is a two-sided marketplace looking to connect savvy consumers with eager restaurateurs. We are putting the power into their hands, helping restaurants fill their seats and customers fill their stomachs. \n\nFor consumers, the mobile app allows anyone with time on their hands to explore London's food scene without breaking the bank. CityMunch offers free real-time discount vouchers across 250+ restaurants in London. \n\nFor restaurants, a simple web-based platform helps fill spare tables during quiet periods.\n\nAs CMO of a new and fledgling company, all processes had to be started from scratch; immediately designing and implementing a full media and communications strategy that has continued to be the foundation of all their b2c communication. \n\nDuring my tenure, the user base increased by +48%!a(MISSING)nd the daily covers (our key metric) rocketed 10x: from 5 on the day that I started to 52 on the day that I left. The average daily validations grew from 6 to 40. \n\nDAU (Daily Average Users) increased by +315.6%!,(MISSING) Daily Engagement rose by +532%!,(MISSING) Sessions Per User +18%!,(MISSING) Daily Engagement Per User +52%!\(MISSING)n\nMy communications work led to CityMunch receiving a prominent specialist feature in the Daily Telegraph, as well as coverage in other major news outlets and online channels","location":"London, United Kingdom","startedOn":{"year":2016,"month":10},"endedOn":{"year":2017,"month":1}},{"organisation":{"name":"Freelance Journalism","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"Freelance Journalist","description":"In addition to reading for my degree, I currently write articles and submit them on a freelance basis to a number of publications including: BRIC - A high-end glossy political publication focusing on the emerging BRIC nations. Croco - An arts and lifestyle magazine originally based in Spain; I was approached by the editor to assist in targeting UK music artists and scenes in order to help them bridge the gap into a new market. DV8 - A sneaker-based fashion magazine based in London.","location":"London, United Kingdom","startedOn":{"year":2013,"month":10},"endedOn":{"year":2016,"month":7}},{"organisation":{"name":"The Tab","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"Music Editor","description":"As editor of the music section for the Cambridge Tab I chase leads, find stories and commission writers to cover all aspects of the music scene in and around the University.\n\nDuring my time as editor over the busy May Ball period I successfully negotiated exclusive coverage with the vast majority of Cambridge colleges for their headline act announcements - putting The Tab music way ahead of the pack of student papers in terms of hits, readership and content sharing. I am consistently within the Top 100 journalists Nationwide and often in the Top 20 / Top 10.","location":"Cambridge, United Kingdom","startedOn":{"year":2015,"month":5},"endedOn":{"year":2016,"month":1}},{"organisation":{"name":"Futurecoins","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"CMO","description":"As a new start-up, Future Coins needed a fast and powerful media strategy. I arranged for Joel Moss to be interviewed, along with our product, by: CNN, Al-Jazeera, The Telegraph, Time Out, Vice and a number of industry publications. Our social media presence grew in both quality and quantity, with targeted marketing through Facebook a great success when looking to reach out to tech savvy 20-somethings in the London area. As well as building awareness for our initial installation in London, I also put together a marketing plan based on bitcoin usage data against population and sought out other areas of the UK to install our units. I successful brokered the deal with the host of our unit in Brighton, which was the first in the city attracting attention from the BBC and local press.","location":"London, United Kingdom","startedOn":{"year":2013,"month":4},"endedOn":{"year":2015,"month":1}},{"organisation":{"name":"The Guestlist Network","socialAccounts":{"linkedin":{},"twitter":{}}},"title":"Journalist \u0026 Section editor","description":"Producing articles for both online \u0026 a print run of 50k. I also interview artists (both written and on camera), as well as contributing to comedy sketch writing.","location":"London, United Kingdom","startedOn":{"year":2013},"endedOn":{"year":2013}}],"education":[{"schoolName":"University of Cambridge","degree":"Bachelor's degree","startedOn":{"year":2013},"endedOn":{"year":2016},"fieldsOfStudy":["Human, Social \u0026 Political Sciences"]},{"schoolName":"City and Islington College","degree":"Access Diploma","startedOn":{"year":2012},"endedOn":{"year":2013},"fieldsOfStudy":["Mixed Media"]}]}
```

This endpoint retrieves a specific profile.

### HTTP Request

`GET https://api.lix-it.com/v1/person`

### URL Parameters

Parameter | Description
--------- | -----------
profile_link | The link to the profile of the person.

