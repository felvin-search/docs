# Adding a Plugin to Neera

This document explains how to add a third-party app search plugin like Pocket, Notion to Neera Search. This enables users to search documents present in these apps directly via Neera. For every plugin, a new Github Repository must be made. Once you have decided on the app, whose search you want to include follow these steps

## 1. Implementing OAuth <a id="591dae26-e736-40c8-8362-530e0855b787"></a>

### Logistical Guidelines: <a id="fc2ed165-c821-4685-b7b4-2587571ef4b4"></a>

Since to access the documents authentication is required, you need to include the app's OAuth in Neera. There are 2 ways to include the app's OAuth in Neera

* **Use a Library**: There are some libraries which provide a OAuth for a large number of parties\([ref](https://github.com/simov/grant#callback-session)\) or sometime you can find app-specific OAuth libraries\([ref](https://www.npmjs.com/package/googleapis)\). Such libraries if properly implemented complete the job in few lines of code.

  But sometimes these libraries, like [this](https://github.com/simov/grant#callback-session) one, are not suitable for architecture where frontend and backend are decoupled, like in our case. They work well when Server-side code also has the job of service frontend pages, like in the case of Flask with Jinja templates. Instead of trying hacks to complete the job with hacks, it is better to look for an alternative.

* **Implement OAuth from Scratch**: If you have a basic understanding of OAuth Protocol, implementing OAuth from Scratch is not a scary thing as it sounds. Almost all parties follow the [standard OAuth](https://datatracker.ietf.org/doc/html/rfc6749) flow. Few follow a variant of the standard, that too with minor changes.

  The advantage here is that you have control over every step. You can design the flow as your requirements. You will have better clarity on the flow of requests especially in a situation like Neera, where there are 2 backends - plugin, Neera Backend.

  But if implementing from scratch is too complicated, and there is a neat alternative library using a library can be more beneficial. For example, Google's OAuth flow is too complicated and there is an official OAuth library by Google to simplify the job. Hence, the Google drive plugin was written using the official [googleapis npm](https://www.npmjs.com/package/googleapis) library.

  **Some important points to be kept in mind. The following points assume that you have a basic understanding of OAuth. If not, watch this short** [**YouTube video**](https://youtu.be/CPbvxxslDTU)**:**

  * Each app gives you a Client ID and a Client Secret. While Client ID is required on the frontend, for the user to give Neera access, **Client Secret should not be exposed in any case**. If someone has both Neera integrations Client ID and Client Secrets, they can do things like sending too many improper requests, which can lead to our integration getting banned.

    Hence, requests involving Client Secret should be made from plugin only rather than the frontend.

  * Change Redirect URIs accordingly when the app's search service is in production. For most of the apps, the Redirect URI needs to be changed at 2 places - in the code, settings of the app.

### Technical Guidelines: <a id="369009b5-38b2-44b9-ae2e-8f29052b864d"></a>

Here is the flow of a third party app's service

* User selects the tab, say notion, which he/she wants to search
* Once the user enters the search query, Frontend checks if the app's access token is present in browser's localstorage or not.

 Tokens are stored in the browser in the following format

```text
{
   "tokens":{
      "app_name1":{
         "access_token":"string"
      },
      "app_name2":{
         "access_token":"string"
      }
   }
}
```

* If the relevant app's access token is not found in localStorage, the frontend makes a request to Neera Backend to check if the app's access token is present in DB.
* Neera Backend returns a JSON of the same above format, saved in the `access_tokens` column. The frontend saves the JSON in localStorage and checks if the app's access token is present or not. \(Note that only strings can be saved in localStorage. Hence the JSON is stringified using `JSON.stringfy` before saving in localStorage. And while accessing the tokens, it is parsed using `JSON.parse`\)
* If the access token is access token is still not found, it means the user has not yet completed OAuth with the app.
* The following are the steps for the user to complete OAuth. Note the process can differ based on the application. But the steps on the user's side will almost always remain same

  1. User clicks on the button `Sign In with the APP_NAME`.
  2. On clicking the button, the page redirects to the app's page. The user is asked to give access to Neera's integration.
  3. Once the user gives access, the page is redirected to the Redirect URI, registered in the app's settings and in the code.
  4. As per standard OAuth, the Redirect URI contains a `code` in query parameters.
  5. The callback component\(the component at Redirect URI\) in the frontend sends the `code` to the plugin service.
  6. The plugin service sends the `code` to the app's relevant OAuth API and receives the `access token`. This `access token` is used to access the user's documents in the app.
  7. The plugin service sends `access token` to the Frontend.
  8. Frontend saves the `access token` in its localStorage and sends it Neera Backend to update the `access token` in the Neera DB.

  **2. Searching the documents**

  There are 2 ways to implement search.

  * **Using the app's Search APIs:** This is preferred if

    * the Rate Limit of the API is not too strict
    *  the search results provided by API are good.

    A request can be made directly from the frontend or via the plugin service to the app's search API.

  * **Using Meili Search:** A Meili Search DB is connected to a plugin service. The app's documents are stored in Meili Search DB. The documents can be indexed via the user's access token.

    So when a user enters the query, the access token is sent to the plugin service. The plugin service returns the search results via Meili Search library APIs.

    Note that the documents in Meili Search DB need to be updated. To achieve that, a cronjob can be set up, which fetches the latest documents of all users using the access tokens.

    To setup a cronjob:

    * Write an endpoint on the plugin service, which when hit, updates documents of all the users in Meili Search DB. \(Ex: `/cronjob` endpoint in [this](https://github.com/Neera-AI/pocket-search-api/blob/master/server/server.js) file\)
    * Make a request to the endpoint periodically via Github Actions. \([Example](https://github.com/Neera-AI/pocket-search-api/blob/master/.github/workflows/cronjob.yml)\)

    Through this, cronjob can be monitored via the web, instead of having to check the server. Also make sure that you don't expose the DB. The DB must be accessed only by the plugin service.

  **Adding Docs**

  Once everything is working well, add the following in the README of the repo

  * Endpoints documentation - For each endpoint mention the HTTP method, data to be sent, response format.
  * Auth flow - explaining how a user completes OAuth
  * Search flow - Explaining how search results are obtained - via the app's search API or Meili Search. If Meili Search is used, explain how the cronjob is set up. Link necessary files for clarity.

