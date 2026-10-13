# Data Dictionary

This document describes the JSON fields returned by the Person Profile and Organisation Profile APIs.

## Person Profile API

`GET https://api.lix-it.com/v1/person`

### Query parameters

| Parameter | Required | Description |
|-------------|----------|-------------|
| `profile_link` | true* | The LinkedIn profile URL of the person. Either `profile_link` or `email` must be provided. |
| `email` | true* | The email address of the person. Either `profile_link` or `email` must be provided. |
| `viewer_id` | false | The LinkedIn ID of the account you would like to view this profile as. |

The root response is a single `Person` object.

<a name='liperson-object'></a>
### Person object

| JSON field | Type | Description |
|------------|------|------------|
| `description` | string | — |
| `location` | string | — |
| `name` | string | — |
| `img` | string | — |
| `birthday` | string | — |
| `email` | string | — |
| `twitter` | string | — |
| `website` | string | — |
| `phone` | string | — |
| `companyUrl` | string | — |
| `im` | string | — |
| `current` | string | — |
| `industry` | string | — |
| `organisation` | string | — |
| `aboutSummaryText` | string | — |
| `currentJobs` | string | — |
| `pastJobs` | string | — |
| `liId` | string | — |
| `numSharedConnections` | number | — |
| `articleFollowers` | number | — |
| `headline` | string | — |
| `salesNavLink` | string | — |
| `salesNavId` | string | — |
| `link` | string | — |
| `experience` | array of [LIPersonExperience](#lipersonexperience-object) | — |
| `education` | array of [LIPersonEducation](#lipersoneducation-object) | — |
| `relatedPersons` | array of [LIPerson](#liperson-object) | — |
| `autoScraped` | boolean | — |
| `defaultDBID` | number | the defaultdb id |
| `certifications` | array of [Certification](#certification-object) | — |
| `skills` | array of [Skill](#skill-object) | — |
| `firstName` | string | — |
| `lastName` | string | — |
| `numOfConnections` | number | — |
| `pronoun` | string | — |
| `languages` | array of [Language](#language-object) | — |
| `birthDate` | [BirthDate](#birthdate-object) | — |
| `patents` | array of [Patent](#patent-object) | — |
| `publications` | array of [Publication](#publication-object) | — |
| `premium` | boolean | — |
| `sharedConnectionNames` | array of string | — |
| `teamLinkConnectionProfiles` | array of string | — |
| `sharedConnectionUrns` | array of string | — |
| `viewerConnection` | [ViewerConnection](#viewerconnection-object) | — |


#### Nested person objects

<a name='lipersonexperience-object'></a>
### Experience object

| JSON field | Type | Description |
|------------|------|------------|
| `description` | string | — |
| `title` | string | — |
| `dateStarted` | string | — |
| `dateEnded` | string | — |
| `location` | string | — |
| `organisation` | [LIOrganisation](#liorganisation-object) | — |
| `timePeriod` | [TimePeriod](#timeperiod-object) | — |
| `seniority` | string | — |
| `isCurrent` | boolean | — |
| `tenureAtPosition` | [Duration](#duration-object) | — |
| `tenureAtOrg` | [Duration](#duration-object) | — |
| `position` | number | the position in the list |


<a name='lipersoneducation-object'></a>
### Education object

| JSON field | Type | Description |
|------------|------|------------|
| `institutionName` | string | — |
| `description` | string | — |
| `degree` | string | — |
| `fieldOfStudy` | string | — |
| `activitiesAndSocieties` | string | — |
| `dateStarted` | string | — |
| `dateEnded` | string | — |
| `grade` | string | — |
| `timePeriod` | [TimePeriod](#timeperiod-object) | — |
| `organisation` | [LIOrganisation](#liorganisation-object) | — |


<a name='timeperiod-object'></a>
### TimePeriod object

| JSON field | Type | Description |
|------------|------|------------|
| `startedOn` | [MonthYear](#monthyear-object) | — |
| `endedOn` | [MonthYear](#monthyear-object) | — |


<a name='monthyear-object'></a>
### MonthYear object

| JSON field | Type | Description |
|------------|------|------------|
| `month` | number | — |
| `year` | number | — |


<a name='duration-object'></a>
### Duration object

| JSON field | Type | Description |
|------------|------|------------|
| `years` | number | — |
| `months` | number | — |


<a name='daymonthyear-object'></a>
### DayMonthYear object

| JSON field | Type | Description |
|------------|------|------------|
| `month` | number | — |
| `year` | number | — |
| `day` | number | — |


<a name='certification-object'></a>
### Certification object

| JSON field | Type | Description |
|------------|------|------------|
| `title` | string | — |
| `issuedDate` | string | — |
| `expirationDate` | string | — |
| `organisation` | [LIOrganisation](#liorganisation-object) | — |


<a name='skill-object'></a>
### Skill object

| JSON field | Type | Description |
|------------|------|------------|
| `name` | string | — |
| `numOfEndorsement` | number | — |


<a name='language-object'></a>
### Language object

| JSON field | Type | Description |
|------------|------|------------|
| `name` | string | — |
| `proficiency` | string | — |


<a name='birthdate-object'></a>
### BirthDate object

| JSON field | Type | Description |
|------------|------|------------|
| `day` | number | — |
| `month` | number | — |
| `year` | number | — |


<a name='patent-object'></a>
### Patent object

| JSON field | Type | Description |
|------------|------|------------|
| `title` | string | — |
| `issuer` | string | — |
| `url` | string | — |
| `issuedOn` | [DayMonthYear](#daymonthyear-object) | — |
| `inventors` | array of [Inventor](#inventor-object) | — |


<a name='inventor-object'></a>
### Inventor object

| JSON field | Type | Description |
|------------|------|------------|
| `entityUrn` | string | — |


<a name='publication-object'></a>
### Publication object

| JSON field | Type | Description |
|------------|------|------------|
| `name` | string | — |
| `publisher` | string | — |
| `description` | string | — |
| `publishedOn` | [DayMonthYear](#daymonthyear-object) | — |
| `url` | string | — |
| `authors` | array of [Author](#author-object) | — |


<a name='author-object'></a>
### Author object

| JSON field | Type | Description |
|------------|------|------------|
| `entityUrn` | string | — |


<a name='viewerconnection-object'></a>
### ViewerConnection object

| JSON field | Type | Description |
|------------|------|------------|
| `connectionDegree` | number | Connection degree (1st, 2nd, 3rd, or 0 for out of network) |
| `saved` | boolean | Whether the lead is saved in Sales Navigator |
| `savedListCount` | number | Number of Sales Navigator lists the lead is saved to |
| `recentPostsCount` | number | Number of recent posts on LinkedIn (last 30 days) |


## Organisation Profile API

`GET https://api.lix-it.com/v1/organisations/by-linkedin`

### Query parameters

| Parameter | Required | Description |
|-------------|----------|-------------|
| `linkedin_url` | true* | The standard LinkedIn company URL. Either `linkedin_url` or `sales_nav_url` must be provided. |
| `sales_nav_url` | true* | The Sales Navigator company URL. Either `linkedin_url` or `sales_nav_url` must be provided. |
| `viewer_id` | false | The LinkedIn ID of the account you would like to view this organisation as. |

The root response is an `Organisation profile response` object.

<a name='organisation-profile-response'></a>
### Organisation profile response

| JSON field | Type | Description |
|------------|------|------------|
| `organisationIds` | [Organisation](#organisation-object) | — |
| `liOrganisation` | [LIOrganisation](#liorganisation-object) | deprecated, use profile instead *(deprecated)* |
| `error` | string | — |
| `profile` | [OrganisationProfile](#organisationprofile-object) | — |
| `links` | [OrganisationLinks](#organisationlinks-object) | — |


#### Nested organisation objects

<a name='liorganisation-object'></a>
### liOrganisation object

| JSON field | Type | Description |
|------------|------|------------|
| `name` | string | — |
| `link` | string | — |
| `industry` | string | — |
| `website` | string | — |
| `description` | string | — |
| `headquarters` | string | — |
| `yearFounded` | number | — |
| `companyType` | string | — |
| `liEmployeeCount` | number | — |
| `size` | string | — |
| `specialities` | string | — |
| `locations` | string | — |
| `stockTickerCode` | string | — |
| `numberOfInvestmentRounds` | number | — |
| `followers` | number | — |
| `numberOfJobOpenings` | number | — |
| `crunchbaseId` | string | — |
| `salesNavLink` | string | — |
| `logoUrl` | string | — |
| `autoScraped` | boolean | — |
| `pastEmployeeCount` | number | — |
| `headquartersAddress` | string | — |
| `initialRequestLiId` | string | — |


<a name='organisationprofile-object'></a>
### profile object

| JSON field | Type | Description |
|------------|------|------------|
| `name` | string | — |
| `industry` | string | — |
| `size` | string | — |
| `logoUrl` | string | — |
| `hqCountry` | string | — |
| `foundedYear` | number | — |
| `website` | string | — |
| `description` | string | — |
| `orgType` | string | — |
| `employeeCount` | number | — |
| `specialities` | string | — |
| `stockTickerCode` | string | — |
| `followerCount` | number | — |
| `jobOpeningsCount` | number | — |
| `headquartersAddress` | string | — |
| `salesNavUrl` | string | — |
| `linkedinUrl` | string | — |


<a name='organisation-object'></a>
### organisationIds object

| JSON field | Type | Description |
|------------|------|------------|
| `id` | number | — |
| `name` | string | — |
| `liID` | string | — |
| `salesNavID` | string | — |
| `uuid` | string | — |
| `liProfileIsDeleted` | boolean | — |


<a name='organisationlinks-object'></a>
### links object

| JSON field | Type | Description |
|------------|------|------------|
| `liProfileURL` | string | — |
| `salesNavURL` | string | — |

