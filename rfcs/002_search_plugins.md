# What?
TODO

# Why?
TODO

# How?
## End User Flow
Main flow:
- Step 1: Enter the query
- Step 2: See the list of search sources, with preview of top results. You can expand the pane to view all results.

Other actions:
- User can downvote a source
- User can create a list of their favoriate sources and add a tab for them.


## Search Plugin Developer Flow
Search plugins can be of different complexities.
Level A: You add a link to your spreadsheet/airtable, we index your data and make it searchable.
Level Z: The application developer writes the whole search plugin with its custom renderer, ranker, and search algorithm.
In middle there are options where you specify some configuration for a bigger plugin and take care of the rest.

## Not in scope
- Search on apps with private data needs to be handled separately. First Auth makes the piece more complicated. There are privacy and compliance requirements which 
we need to think about, and it out of score of this RFC.
- We envision that some of the search plugins will have premium paid content, people will be able to pay a subscription fee to access results from these plugins. This RFC does not cover paid search apps.


## Implementation
### Requirements

Things the plugins need to expose:
- Number of results for a query
- Available filters

### High Level Overview
Broadly, Search Plugins will work same way as [Snippet Apps](./001_snippet_apps.md).

Step 0: Do some query processing/parsing
Step 1: On the basis of query, find the relevant search plugins
Step 2: For each of these search plugins, get the results and render them for the user


### Search Plugin Spec
TBD

### Search Plugin DB Schema
TBD

### Search Plugin Server
TBD

### Scoring System
TBD