# Frontend Mentor - Advice generator app solution

This is day 8 of learning javascript and day 1 for ajax and api. I used 375px for mobile and 1440px for desktop.

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Live Site URL: [Advice generator app](https://6601b1a0151dd8138fc3f845--effortless-blini-844b83.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- APIs
- Ajax
- Javascript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to create a page using ajax and APIs.

```js
$(document).ready(() => {
  adviceGenerator();
});

document
  .getElementById("advice-randomizer")
  .addEventListener("click", function (event) {
    event.preventDefault();

    adviceGenerator();
  });

function adviceGenerator() {
  var url = "https://api.adviceslip.com/advice";

  $.ajax(url, {
    success: (data) => {
      data = JSON.parse(data);
      $(".advice-number").text(data.slip.id);
      $(".advice").text(data.slip.advice);
      console.log(data.slip.id);
      console.log(data.slip.advice);
    },
    error: (error) => {
      console.log("error");
    },
  });
}
```

## Author

- Frontend Mentor - [@pauleenann]
