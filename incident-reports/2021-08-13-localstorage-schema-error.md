# Blank Screen because of incompatible Local Storage Schema

*Date: 13 August, 2021*

## What was the problem?

A user who has not opened for long ago, reopened the website and noticed a blank screen with the following errors in the console.

![Error in console](https://i.imgur.com/0Zo9Com.png)

## Why did it happen?

[Till mid May 2021](https://github.com/Neera-AI/neera/commit/bf53ca0bf9ec97809dde5694541f4c9b1ee0b417), we used to store `profile` in the local storage with schema `[<profile 1>, <profile 2>]`. Then we removed using local storage and fetched all the profiles from DB. Though profiles didn't change often, so optimize website load time with [v1.27.0](https://blog.neera.ai/2021/07/22/v1-27-0-autocorrect-faster-results-and-a-basic-image-search/) we re-introduced local storage. This time the schema was different and looked like `{list:[<profile 1>, <profile 2>]}`.

If a person had Local Storage schema stored as per old schema, and then they open it now, it would cause error as the latest code expects a different Schema. This precisely happened with one of the users. The user had opened the site once long back, and never used the site later. But when the user was trying to access the site recently, an error triggered preventing the page from loading.


## How did we fix it?

We changed the key name of the profiles from `profile` to `profile_v2021_08_13`. When a user opens a page, it tries to find profiles from the Local Storage with the new key name - `profile_v2021_08_13`, since it doesn't exist in any of the users till now. It will fetch the profiles from database as per the latest schema and the latest schema will be used by all the users from now on, irrespective of when they had opened our site in the past.

The date was included in the key name so that it is easier to recollect an explanation for the change. It will be easier to identify schema of the value as per versions in future. Hence, we can avoid the problem of having different data schemas for same key name.

## Lessons and thoughts

- Cookies are better because, one can set an expiry date and new ones can be used.
- Do not rely on Local Storage heavily. It's difficult to change the values. Sometimes to fix the bugs, you may have to do dirty hacks, which compromise code quality.

The other ideas that were suggested to solve the problem

- **Catch errors while using values fetched from localstorage** In `useEffect` fetching the profile value, check if the current data schema is the latest one.  If not, remove the key-value from Local Storage and re-fetch from the Database. We have a simpler solution than this.
- **Kill Local Storage:** Remove Local Storage completely. Using Local Storage, the performance increase is apparent, this issue could be fixed with simpler solution without compromising on performance.