# Updating Profile Array in the Database for Registered User

## Getting all User Ids <a id="cc7610a5-4c7f-4866-81d8-6501c67fea96"></a>

1. Go to [https://supertokens.io/](https://supertokens.io/) and login. \(Credentials Pinned in \#general Channel\)
2. Download the CSV of production users by clicking the button

## Changing the script <a id="c8724c99-6653-4279-929c-1e19e779bd4c"></a>

\(The code to update Profile is in [this](https://github.com/Neera-AI/neera/blob/master/server/update_profile_column.js) file \)

1. Copy all the user-id's and put them in an array.
2. Assign the array to `userIds` variable in [this](https://github.com/Neera-AI/neera/blob/master/server/update_profile_column.js#L3) line
3. Make appropriate changes to the function present in [the file](https://github.com/Neera-AI/neera/blob/master/server/update_profile_column.js) \(**Useful**: The `editProfiles` function imported from `models/profiles.js` takes `userId` and `newProfile` as parameters. The function replaces the `userId`'s old profile with the `newProfile` . So basically, you need to get the old profile of `userId` using `getProfiles`. Manipulate the obtained profile and call the `editProfiles` function\)
4. Run the script on the server or any other place, where the `connectionString` used in `server` folder is production Database' `connectionString`.

