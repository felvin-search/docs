---
title: Getting Started
description: Get started by creating your first instant app
---

> Read here to get an [overview of Instant Apps](./overview.md).

This page explains how you should think about creating a new Instant App. Also check out [CONTRIBUTING.md](https://github.com/felvin-search/instant-apps/blob/master/CONTRIBUTING.md) for more technical complementary instructions.

There are three main steps involved in creating a new app

1. **Target search queries for your app**
1. **Convert the query into some data**
1. **Render the data in a UI component**

## Step 1: Search Queries

Start by thinking about what search queries your app should render for. The most common use case is to narrow down a list of **trigger keywords**.

For example, if you are creating an app which shows weather information, you would want to target search queries which contain "weather" or "temperature" or queries like "will it rain today".
If you want to create an app which shows football scores, you may want to target search queries containing names of top leagues or clubs.

Once you have narrowed down the queries, start writing your app's `dataToQuery` function.

<details>
<summary>Example, this is the definition of the dictionary app</summary>

```js
// File: https://github.com/felvin-search/instant-apps/blob/master/src/apps/DictionaryApp.tsx

const DictionaryApp = {
  name: "Dictionary App",
  description: "A simple dictionary app to define an english word.",
  queryToData,
  Component,
};

export default DictionaryApp;
```

</details>

## Step 2: Convert Query into Data

Whenever a user searches something on felvin.com, the `dataToQuery` function of all the instant apps available is called with the query. Hence, the first thing your app should do is return a [falsy value](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) (undefined, null, false) if the query does not match the pattern your app is looking for.

Next step, try converting the query into some data which can be displayed on the web. This step can involve making external API requests or using some library to process the query.

Once you have done so, return the data.

<details>
<summary>Example, `queryToData` function of the dictionary app</summary>

```js
// File: https://github.com/felvin-search/instant-apps/blob/master/src/apps/DictionaryApp.tsx
async function queryToData({ query }): {
  // If the query does not contain the following words, do not trigger the app
  // `define`, `meaning`
  let triggered = false;
  ['define', 'meaning'].forEach((word) => {
    if (query.toLowerCase().split(" ").includes(word)) {
      triggered = true;
    }
  });

  if (!triggered) {
    return undefined;
  }

  // Extract the word from the query by removing the trigger keyword
  const cleanedQuery = cleanQuery(query);
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en_US/${cleanedQuery}`
  );
  const data = await response.json();
  if (data && Array.isArray(data) && data.length > 0) {
    return data[0];
  }
}
```

</details>

## Step 3: Display the Data

Felvin takes the data returned by your `queryToData` function and passes it as a React prop to the `Component` of your app.

Use a simple JSX syntax or return a complex React app to render the data, however you want to!

<details>
<summary>Example, `Components` of the simple dictionary app</summary>

```jsx
// File: https://github.com/felvin-search/instant-apps/blob/master/src/apps/DictionaryApp.tsx

// Another functional component used in main Component of the app
function Definition(props) {
  const definition = props.data;
  return (
    <DefinitionContainer>
      <div>{definition.definition}</div>
      {definition.synonyms && (
        <div>
          Synonyms: &thinsp;
          <em>{definition.synonyms.join(", ")}</em>
        </div>
      )}
    </DefinitionContainer>
  );
}

// The UI logic of the app
function Component(props) {
  const data = props.data;

  return (
    <div>
      <h1>{data.word}</h1>
      {data.meanings.map((m, index) => {
        return (
          <div key={index}>
            <em>{m.partOfSpeech}</em>
            {m.definitions.map((d) => (
              <Definition data={d} key={d} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
```

</details>

## See also

- [Overview of instant apps](./overview.md)
- [Contributing guide](https://github.com/felvin-search/instant-apps/blob/master/CONTRIBUTING.md)
- [API Spec of an instant app](./api-spec.md)
