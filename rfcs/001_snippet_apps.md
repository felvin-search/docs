# What?
<Image>
Snippet Apps are the small instant answer thing which you get on the top of search. It can be football scores, stock prices or notes on a topic or anything. 
We are building a system where anyone can create these apps, and we'll distribute them instantly through Neera search

# Why?
Search is the most convinient ways to distribute apps. If you want a timer, or want to convert currency or calculator, no one install these apps, you just search them. Though the numbers and kind of apps you find in Google/Bing is still limited the bandwidth, capacity and motivation of these companies. We can do much better!

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
### High Level Overview
Each app consists of a `queryToData` function and a `renderer`. `queryToData` takes in the user query, and produces the data we want to display in the snippet app.
`renderer` defines the react component which will display the data. For example, in a dictionary app, the query can be "serendipity meaning", `queryToData` will return a json with meaning and other data, and `renderer` is used to render it.

How will this work:
Step 1: Take the query, pass it to all registered snippet apps.
Step 2: Process the `queryToData` functions parallely.
Step 3: For all the apps which returned data, pass them into "scorer and ranker"
Step 4: The "Scorer and Ranker" returns one snippet app. Factors which can be used in ranking, popularity of the plugin, query, user preference and bundle size of renderer.
Step 5: Take the renderer of this snippet app, and pass it back to teh frontend for rendering.

Steps 2 to 4 happens on the server. If the app returns no data, then it means it has nothing to render. 
## Implementation (Details)
### Snippet App Spec
### Snippet App DB Schema
### Snippet App Server
### Scoring System
### How to send the rendered component to the web application? 


# FAQ?
## How will you prevent spam apps?
## How will you allow private application?
