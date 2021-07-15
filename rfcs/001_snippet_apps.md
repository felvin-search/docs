# What?
<img width="933" alt="snippetApp" src="https://user-images.githubusercontent.com/2477788/114712160-66f05080-9d4d-11eb-8554-6b41ff561e99.png">
Snippet Apps are the small instant answer thing which you get on the top of search. It can be football scores, stock prices or notes on a topic or anything. 
We are building a system where anyone can create these apps, and we'll distribute them instantly through Neera search

# Why?
Search is the most convinient ways to distribute apps. If you want a timer, or want to convert currency or calculator, no one install these apps, you just search them. Though the numbers and kind of apps you find in Google/Bing is still limited the bandwidth, capacity and motivation of these companies. We can do much better!

# Status
In Progress (as of 15th July 2021)

# How?
## End User Flow
Same as your current experience:
- Step 1: You type in the app you want, say "5 minutes timer"
- Step 2: The app will appear, timer in this case. Then you use the app.
In addition, you will be able to rate the application, and will be able to forever hide some applications.

## Application Developer Flow
- Step 1: You decide what app to create. (Will talk about details of this later)
- Step 2: You submit the app to our app store.
- Step 3: Your app is visibile to the world, anyone can start using it instantly.
- Step 4: You make improvements to your app so that lots of people use it, then you make money as we share a part of the ad revenue.

## Implementation 
### Factors
- The snippet apps should load fast for the end user
- We want flexibility in determining which apps should be visible to the end user
- The development + publishing cycle for the app developer should be as small as possible
- Right now we are building for ~100 snippet apps, but the system should be flexibile enough for us to upgrade it to support 10K snippet apps.


### High Level Overview
Each app consists of a `queryToData` function and a `renderer`. `queryToData` takes in the user query, and produces the data we want to display in the snippet app.
`renderer` defines the react component which will display the data. For example, in a dictionary app, the query can be "serendipity meaning", `queryToData` will return a json with meaning and other data, and `renderer` is used to render it.

![image](https://user-images.githubusercontent.com/2477788/125734831-836de41c-7aa6-4c14-8df2-950b6efbed9f.png)

How will this work (end user flow):
Step 1: Take the query, pass it to all registered snippet apps.
Step 2: Process the `queryToData` functions parallely.
Step 3: For all the apps which returned data, pass them into "scorer and ranker"
Step 4: The "Scorer and Ranker" returns one snippet app. Factors which can be used in ranking, popularity of the plugin, query, user preference and bundle size of renderer.
Step 5: Take the renderer of this snippet app, and pass it back to the frontend for rendering.

Steps 2 to 4 happens on the server. If the app returns no data, then it means it has nothing to render.

How will this work (developer flow):
Step 1: Developer creates the snippet app. (Will need to write tools for them to test out the snippet apps locally)
Step 2: They submit the app on through our web form or cli tools
Step 3: We take the package, compile it, optimize the code (maybe) and put it in the DB.

## Implementation (Details)
### Snippet App Spec
Each snippet app will be a javascript/node package. The index.js should export an object with following keys:
- `name` : String
- `Description`: String
- `queryToData`: Function `{query, options} => Object`, query is a string passed from the main Neera application, additional paramaters will be in options. In the first implementation `options` are empty, any new parameter along with query will go into this. The output can be any serializable javascript object.
- `renderer`: A react component, the output of `queryToData` will be passed to this.

### Snippet App DB Schema
- `name`
- `Description`
- `publishedDate`
- `ratings`: (will implement later)
- `author`
- `queryToData`
- `renderer`

### Snippet App Server
TBH I am not super sure about the details here, will know by coding. We know we can take the code from DB and execute it on the server. We also know that it is possible to generate the react components on the server and push it on the client. If you can point us to specific tools or some reference implementation, that will be great!


### Scoring System
Doesn't need to be fancy. Right now we'll some simple static value for each App, will add more parameters later.


# FAQ?
## How will you prevent spam apps?
- We'll make sure they appear only to a small set of people. In this period, this small set of people will have a chance to to downvote the app. If the app is downvoted, they won't turn up for other people.
- How to ensure it appears only for small set of people? Have a beta tester program, in start, the team can manually test out all snippet app submissions. If the spammers are persistent, we'll figure something out.