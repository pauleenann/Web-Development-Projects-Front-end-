# Frontend Mentor - Time tracking dashboard solution

I used 375px for mobile and 1440px for desktop.

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Live Site URL: [Time tracking dashboard](https://66ab61e9fd8f5ac2736fb73c--whimsical-wisp-c6a55d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript

### What I learned

I learned how to create HTML elements using Javascript

```js
let timeBox = document.createElement("div");
timeBox.classList.add("time-box");
timeBox.innerHTML = `
        <div>
            <div>
                <p>${element.title}</p>
                <img src="images/icon-ellipsis.svg">
            </div>
            <div>
                <p>${element.timeframes.monthly.current}hrs</p>
                <p>Last month - ${element.timeframes.monthly.previous}hrs</p>
            </div>
        </div>
        `;
document
  .getElementById("time-info")
  .insertAdjacentElement("beforeend", timeBox);
```

## Author

- Frontend Mentor - [@pauleenann](https://www.frontendmentor.io/profile/pauleenann)
