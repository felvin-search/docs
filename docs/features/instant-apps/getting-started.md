---
title: Getting Started
description: Get started by creating your first instant app
---

> Read here to get an [overview of Instant Apps](./overview.md).

This page explains how you should think about creating a new Instant App. Also check out [CONTRIBUTING.md](https://github.com/felvin-search/instant-apps/blob/master/CONTRIBUTING.md) for more technical complementary instructions.

There are only three steps involved in creating a new app

1. **Target search queries for your app**
1. **Convert the query into some data**
1. **Render the data in a UI component**

## Step 1: Search Queries

Start by thinking about what search queries your app should render for. The most common use case is to narrow down a list of **trigger keywords**.

For example, if are creating an app which shows weather, you would want to target search queries which contain "weather" or "temperature" or queries like "will it rain today".
If you want to create an app which shows football scores, you want to target search queries containing names of top leagues or clubs.

Once you have narrowed down the queries, start writing your app's `dataToQuery` function. The first thing your app should do is return a [falsy value](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) (undefined, null, false)

## Step 2: Convert Query into Data

## Step 3: Display the Data
