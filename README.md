# Readme - Georgios Lymperopoulos

## Installation

Install the dependencies and devDependencies

```sh
$ yarn install
```

## Run Project

In order to run the application locally

```sh
$ yarn run dev-server
```
Visit http://localhost:8080/

## Testing

Want to test that nothing is broken?

```sh
$ yarn test --watch
```

## Deployed App
 - https://movies-glympe.herokuapp.com/

## Decisions

###  - Data Source
 - In addition of the json file (movies.json), i have also used faker for generating some sample data as seen in file:
 -- scr/fixtures/movies.js
- If needed, you can change the data source to the faker data file from:
 -- src/components/MovieList.js

###  - Webpack
 - allows to organise javascript files by getting a signle javascript file back which contains everything like: 
 -- dependencies
 -- application code
 - this allows to have faster loading as we have a signle request for a single script tag
 - app is more scalable as we can separate our javascript code to separate files and import/export them

###  - Redux
 - easier sharing data between components
 - components are able to interact with application state (getting and setting values) without having to manually passing props down to component tree
 - allows to have multiple stores (in our case movies store and filters store)

## Extras
 - Added the ability to edit a movie title:
  -- When viewing the details of a movie, click on edit button next to title, edit movie and then close (save) and also showing an error message if title is empty
 - Added the ability to remove a movie:
  -- When viewing the details of a movie, click on edit button next to title and a remove button appears on bottom right, where a movie can be removed after confirmation.
 - Added tests for:
  -- action generators
  -- movies selector
  -- movies and filters reducer
  -- snapshot testing with enzyme