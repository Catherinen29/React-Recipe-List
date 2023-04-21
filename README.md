# React List

## Introduction

This was my second project on General Assembly's SEI course. The main goal of the project was to create a list that the user can add to, edit and delete list items among other things. 

The final project can be found here:
https://catherinen29.github.io/React-Recipe-List/


### What's included

The project includes the following:
 - index.js
 - JSX files for each component of the page: App, Inspo, ReturnedRecipes, SavedRecipes, EachRecipe, NavBar
 - Corresponding css files. 
 - Here you’ll also find the Wireframe.

### Technologies Used

The technologies used throughout the project were:
- ReactJS
- VS Code – to write and execute the code;
- GoogleDocs – to plan and keep track of completed requirements;
- Excalidraw – to design the initial wireframe for the project;


## Brief

The task was to build a web application using ReactJS and an API of my choice. 
- Add a new item to a list
- Mark the item as complete/favorite/(watch, read, listen) later/flag/etc
- Edit an item from a list
- Remove an item from a list
- Clear/delete all items
- Clear/delete only marked items


The webpage needed to include multiple pages using React Router and fetch data from an API. 

## User stories

As a user, I want to input what meals I want to add to this week’s list
As a user, I want to like individual meal/recipes to try again
As a user, I want to remove individual meals from the list
As a user, I want to be able to edit individual items on the list
As a user, I want to clear the whole list
As a user, I want to clear the ‘ticked’ items on the list
As a user, I want inspiration for what to eat, by searching from a database
As a user, I want to be able to click into different pages

## Planning

Day one involved deciding on what subject the lsit would be based on and finding an API which met this. I decided to go with the edamam API gives the user access to a database of food recipes:
https://developer.edamam.com/edamam-recipe-api

I created a wireframe on Excalidraw which meant I could picture what the app would look like as I began to plan. I decided on some user stories and based on these, I began to plan. I broke down each page into smaller pieces of work which I could focus on and listed what each section should do. 

I made notes throughout the project as progress was made and if blockers were met, and checked off each of the requriements as they were completed. 

## Build Process

I decided to start with the API part of the project, ensuring I could fetch the data and getting to know the data that I would be working with. I built this in one component, 'Inspo'. This component allows the user to do a word search, and the API fetch returns results of data containing the searched words. I decided to request only certain pieces of data from the fetch result as I knew I wouldn't be using all of the information the API offers. 

```js
        const searchRecipeArr = results.hits.map((recipeData, index) => ({ 
              label: recipeData.recipe.label,
              cuisineType: recipeData.recipe.cuisineType[0], 
              mealType: recipeData.recipe.mealType[0],
              index}
          ))
```

The second component, 'SavedRecipes', includes the main event of the project: the list. Here the user can create their own recipe and add it to the list. Any number of items can be added, and results from the API search can be added to the list here too. 

I decided to leave the CSS towards the end as I was determined to complete as much of the MVP as possible. 


## Wins
- Rendering the API search results and adding them to the list. 
- Creating a form that the user can complete so they can add their own data to the list. 
- Introduced to uuid - helpful tool for the future and meant I could work with IDs which weren't provided by the API, instead of indexes of arrays. 


## Key takeaways
- Learning more about React - I've enjoyed it even though it's been challenging. 
- Double check your parameters!

## Future Improvements
- Improve styling and make the app responsive. 
- Pictures on the icons.
- Let the user return to their list when they leave the page using local storage. 
- Add an extra page which gives the user access to the ingredients and method.


