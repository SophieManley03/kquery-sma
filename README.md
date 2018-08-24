# 🎤 kQuery assignment

## Context

Designing an API like jQuery. Starting by implementing a few basics:

- kQuery(cssSelectorString)
- kCollection.replaceWith(kCollection)
- kCollection.style(Object)
- kCollection.remove()
- kCollection.find(cssSelectorString)
- kCollection.get()

I choose to add:

- append(HTMLString, option) _(Add an item at a specific place regarding the selected items)_

Oh, I almost forgot: we need kQuery within a week ;)

## Techno

I needed to find an efficient build tools for library so I asked for advice to a friend. He told me about rollup.
That's how I found the **skeleton** of kQuery:
[rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) 🙏

Once I got the architecture, I decided to use **jest** for testing. It's been a while that I wanted to try, I took the opportunity.

I knew that I wanted to write my code with ES6 syntax and that would need **babel** to transpile it into ES5. Fortunately the starter-kit come with it.

**ESLint** for linter

**prettier** to format code

## Test

After downloading the lib, download the dependencies (npm install).

To test the lib: open a console, at the right path, and use:

> npm run test

You can download the lib and create an html at the root of the project and import `kQuery.umd.js` to test in browser console.

## Workflow

Before publishing on npm or pushing on github, you will have to run:

> `npm run build`

## Improvment

- Create an example to try it on web.
- Add types for kCollection function
- Implement other functionalities.
