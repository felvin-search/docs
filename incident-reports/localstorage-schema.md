# Change of Local Storage Schema over time

*Date: 13 August, 2021*

## What was the problem?

A user who opened the website long ago, when reopened the website notices a blank screen with the following errors in the console.

![Error in console](https://i.imgur.com/0Zo9Com.png)

## Why did it happen?

In the initial days, when Harsh was the only person writing the code used to save profiles in Local Storage with a particular Schema. In later versions of the code, Local Storage was ignored and profiles were fetched from the database. Later to improve the performance, Sahil again implemented fetching profiles from Local Storage, but this time with a schema  different from the previous schema used by Harsh.

So, if a person had Local Storage schema stored as per Harsh's version, then it would cause error as the latest code expects a different Schema. This precisely happened with one of the users. The user had opened the site once long back, and never used the site later. But when the user was trying to access the site recently, an error triggered preventing the page from loading.


## How did we fix it?

We changed the key name of the profiles from `profile` to `profile_v2021_08_13`. When a user opens a page, it tries to find profiles from the Local Storage with the new key name - `profile_v2021_08_13`, since it doesn't exist in any of the users till now. It will fetch the profiles from database as per the latest schema and the latest schema will be used by all the users from now on, irrespective of when they had opened our site in the past.

The date was included in the key name so that it is easier to recollect an explanation for the change. It will be easier to identify schema of the value as per versions in future. Hence, we can avoid the problem of having different data schemas for same key name.

## Lessons and thoughts

- Cookies are better because, one can set an expiry date and new ones can be used.
- Do not rely on Local Storage heavily. It's difficult to change the values. Sometimes to fix the bugs, you may have to do dirty hacks, which compromise code quality.

The other ideas that were suggested to solve the problem

- **Check in `useEffect`:** In `useEffect`, check if the current data schema is the latest one.  If not, remove the key-value from Local Storage and re-fetch from the Database. We have a simpler solution than this.
- **Kill Local Storage:** Remove Local Storage completely. Using Local Storage, the performance increase is apparent, this issue could be fixed with simpler solution without compromising on performance.
