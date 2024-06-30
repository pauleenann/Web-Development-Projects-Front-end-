# Frontend Mentor - Notifications page solution

This is day 8 of learning javascript. I used 375px for mobile and 1440px for desktop.

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Notifications page](https://66811fc12d3c73f52d7b655c--heartfelt-pixie-c2627d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

I learned how to use the addEventListener and querySelectorAll.

```js
const mark = document.getElementById("mark");

mark.addEventListener("click", () => {
  const unreadIcon = document.querySelectorAll(".unread-icon");
  const unreadBox = document.querySelectorAll(".unread");
  const notifNum = document.getElementById("notif-num");
  notifNum.innerHTML = "0";
  // console.log(unreadBox[0])
  for (i = 0; i < unreadBox.length; i++) {
    unreadBox[i].style.backgroundColor = "var(--Very-light-grayish-blue)";
    unreadIcon[i].style.display = "none";
  }
});
```

## Author

- Frontend Mentor - [@pauleenann](https://www.frontendmentor.io/profile/pauleenann)
