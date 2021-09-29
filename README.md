# [docs.felvin.com](https://docs.felvin.com)

Documentation site built using [Docusaurus](https://docusaurus.io).

## Contributing

Fork and clone the repository.

```
yarn install
yarn start
```

## How to update Instant Apps marketplace?

Add a new YAML or update YAML files inside `static/instant-apps-manifests`.

```yaml
# Instant App manifest
name: App Name
description: App Description
screenshotUrl: A URL to a screenshot or gif of the app working (Ideally 200x200 or 400x400)
# At least one example query which would show the app on felvin.com
exampleQueries:
  - search query a
  - search query b
```
