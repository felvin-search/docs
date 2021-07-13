# We will use styled components to write our CSS.

## Decision

We will use styled components to write our CSS. Date: 7th May 2021

## Context

* Our CSS was mainly written in Tailwind. Chose it because my \(Harsh's\) flatmate recommended it and its quite popular on HackerNews. Though it quickly became a mess and the actual css was combination of Tailwind, inline styling and regular .css files.
* When Sahil joined, we decided to stick to one system.

## Factors

* CSS system allow us to have independent component, no large global css. Having independent components give us flexibility to make changes in one component without thinking what's happening in rest of the code base. This super important with plugin system, where we want to allow plugins to be developed independently of rest of the code base.
* It should be easy to get help. Things will break, we'll get stuck, I want to be able to call a friend and say "bro get me out of this". So popularity is important.

  Should be able to quickly convert mocks to HTML + CSS.

### Why Styled Components [https://styled-components.com/](https://styled-components.com/):

* You write CSS the way you normally do.
* The CSS goes into the component, and component remains independent of rest of the system.
* Styled Components is quite popular, see their website, it says Vimeo, Airbnb, Github, lots of companies use them.

  Because its normal css unlike tailwind, it's easier to get help. You can directly copy css from figma mock and we can move faster.

## Alternatives

* Tailwind, was using this earlier, its quite popular. But you don't write CSS in the normal way which added to a learning curve.
* Write normal css file.
* Other css systems like less or sass

## Expected Outcome

* It will be easy for us to write CSS for the project

## Actual Outcome

To be seen.

### 1 month review

* After shifting completly to styled components, the code has become easier to read and modify compared to when we used taildwindCSS.
* The style for each plugin does stay inside of it, and hence is not dependent on any CSS in the main codebase. Although, this leads a lot of code repetition as we are stopping ourselves from inherting from global components.
* Work that needs to be done on our part to utilize styled components better:
  * Write better global styling - As of right now the global styling is in `index.js` but it would be better if they are kept in `App.js`. This would be easier to achieve once we achieve the goal of keeping the `App.js` just for routing and move everything to separate components.
  * We need global variables for font properties, background colours \(global themes\) and also global media queries which would make it easier to change things if and when needed.
  * Making better global components- Making using of attributes rather than making multiple styled components that are very similar in design and hence should be combined.

The result and the process of doing the above points should be mentioned in the next review of styled components.

### 6 month review

### 2 year review

### 5 year review

