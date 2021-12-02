# [docs.felvin.com](https://docs.felvin.com)

Documentation site built using [Docusaurus](https://docusaurus.io).

## Contributing

Fork and clone the repository.

```
yarn install
yarn start
```

## How to update Instant Apps marketplace?

Update `appDetails.json` inside `src/components`, by adding a JSON object (example below), copying data from that app's `index.js`.

```json
{
    "id": "@felvin-search-apps/instant-app-details",
    "name": "Instant App Details",
    "description": "a meta instant app that shows details of all the felvin instant apps",
    "exampleSearchQueries": [
        "list all felvin instant app details"
    ],
    "screenshotPath": "https://raw.githubusercontent.com/felvin-search/instant-apps/master/apps/instant-app-details/src/files/screenshot.png"
},
```
