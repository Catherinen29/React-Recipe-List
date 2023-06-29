# React List

## Introduction

This was my second solo project on General Assembly's SEI course. The main goal of the project was to create a list that the user can add to, edit and delete list items among other things. 

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
- Excalidraw – to design the initial wireframe for the project.


## Brief

The task was to build a web application using ReactJS and an API of my choice. 
- Add a new item to a list
- Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
- Edit an item from a list
- Remove an item from a list
- Clear/delete all items
- Clear/delete only marked items


The webpage needed to include multiple pages using React Router and fetch data from an API. 

## User stories

- As a user, I want to input what meals I want to add to this week’s list
- As a user, I want to like individual meal/recipes to try again
- As a user, I want to remove individual meals from the list
- As a user, I want to be able to edit individual items on the list
- As a user, I want to clear the whole list
- As a user, I want to clear the ‘ticked’ items on the list
- As a user, I want inspiration for what to eat, by searching from a database
- As a user, I want to be able to click into different pages

## Planning

Day one involved deciding on what subject the list would be based on and finding an API which met this. I decided to go with the edamam API which gives the user access to a database of food recipes:
https://developer.edamam.com/edamam-recipe-api

I created a wireframe on Excalidraw which meant I could picture what the app would look like as I began to plan. The wireframe includes numbers pointing to different features required for the project. I decided on some user stories and based on these, I began to plan. Each page was broken down into smaller pieces of work which I could focus on and listed what each section should do. 

I made notes throughout the project as progress was made and if blockers were met, and checked off each of the requirements as they were completed. 

## Build Process

I decided to start with the API part of the project, ensuring I could fetch the data and getting to know the data that I would be working with. This feature was built in one component: 'Inspo'. The component allows the user to make a search based on a keyword, following which, the API fetch returns results of data containing the searched words. I decided to request only certain pieces of data from the fetch result so the object returned would be easy to manage and hold the specific information that would be displayed. 

The second component, 'SavedRecipes', includes the main event of the project: the list. Here the user can create their own recipe - name, cuisine and meal type - and add it to the list. Any number of items can be added, and results from the API search can be added to the list here too. 

I decided to leave the CSS towards the end as I was determined to complete as much of the MVP as possible. 

To keep track of progress made, I kept a small diary listing the main successes and issues encountered each day:

On Day 1 of the project, I knew I wanted to base my project on food or recipes so I straightaway looked for a fitting API. Looking into the types of data returned from different APIs helped with creating a picture in my mind of what the application would look like. The first API that I chose to begin working with didn't provide the information I was looking for so exploring a few of these was necessary. I could then design my wireframe and start planning. There was time on Day 1 to begin the basics of the code for the application and included successful fetch requests and a form with a user input field and search button connected to the fetch request. Ensuring the state was updated with only the desired information from the fetch request was initially a challenge however as I continued to work with the API and understand how it worked, I was able to overcome this. This is shown in the code below, whereby an object is created for each fetch request to return certain data types - label, cuisine type, meal type and index. 

```js
        const searchRecipeArr = results.hits.map((recipeData, index) => ({ 
              label: recipeData.recipe.label,
              cuisineType: recipeData.recipe.cuisineType[0], 
              mealType: recipeData.recipe.mealType[0],
              index}
          ))
```

Day 2 of the project involved creating the main component: the list. As well as this, the results of the API search rendered on the webpage and the form that allows the user to input their own recipe and buttons which would have their functionality added to later were added. Initially I had the state of the list in the 'SavedRecipe' component, however I realised that this would create problems later when adding the results of the fetch request to the list. I had to move the state, and therefore the functions up to the parent component. Once I had done this, the function to update the state wasn't working and giving an error when I was testing the process. I realised that I had been calling the child element twice in the App component so this was fixed easily. 

Day 3 was probably the most challenging of the week. It saw the webpage coming to life through CSS. The code for selecting  individual items meant creating a copy of the existing list, checking to find out if the selected item was in the array (list) by using the ```includes``` function, then finding its position and remving that specific item using ```indexOf``` and ```splice```. 

```js
function addOrRemove(e, id){
const selectedItemsArray = [...selectedItemsIDs]
    if (selectedItemsArray.includes(id)) { 
        const indexToRemove = selectedItemsArray.indexOf(id)
        selectedItemsArray.splice(indexToRemove) 
        setSelectedItemsIDs(selectedItemsArray) 
    } else if (!selectedItemsArray.includes(id)) {
        setSelectedItemsIDs([...selectedItemsArray, id]) 
    }
  }
```

On Day 4, the code for deleting individual items was written. The uuid tool in React was introduced to generate original id's for each list item so they could be differentiated when being individually selected and deleted. The uuid needed to be generated each time a new recipe was created or selected from the fetch request. 

The below code snippet instructs the programme to find the element which has been selected and its id (generated by the uuid) and compare it to others on the list. If the id exists in the array, the element should be removed and the state updated. 

```js
  function deleteListItem(id){
    const removeArr = [...recipeList]
    const indexToRemove = removeArr.findIndex((recipe) => recipe.id === id)

    if (indexToRemove !== -1) {
      removeArr.splice(indexToRemove, 1)
    }

    setRecipeList(removeArr) 
  }
```

## Challenges
I struggled quite a bit with writing the code for selecting certain items. My initial intention of code wouldn't produce the results I was looking for, so I moved on to exploring different array methods, which took me further and further away from the correct method. In the end, it was my initial train of thought that I would return to and use to implement. My issue had been the use of the wrong parameters, which turned out to be an easy fix. 

Unfortunately, I was not able to implement the code which allowed the user to edit an item on the list. I knew I needed to update the state by targeting one part of the object in the list but wasn't able to update it this way. The project was due before I was able to figure this out but look forward to solving the matter and having the webpage fully functional. 

## Wins
Exploring the use of APIs and the data they produce was an interesting learning curve and has given an exciting look into how information can be used for different apps. I was particularly happy with matching up the form in which the user can add their own recipe to the list, and the data that is returned from the fetch request.  

I enjoyed discovering the uuid tool, which I found to be impressive and helpful in this project. I know that it will be valuable in future projects, particularly when id's are not provided by the API - or whichever data source is being used. 

## Key takeaways
- Learning more about React - it was a challenging week, but I've found it to be an enjoyable technology to use and inteact with. 
- I need to brush up on my knowledge of array methods and when they're most suitable - and to double check the parameters!

## Future Improvements
- Improve styling and make the app responsive. 
- Pictures on the icons.
- Let the user return to their list when they leave the page using local storage. 
- Add an extra page which gives the user access to the ingredients and method.


