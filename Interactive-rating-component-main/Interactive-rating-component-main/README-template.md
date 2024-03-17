# Frontend Mentor - Interactive rating component solution

This is Day 2 of learning Javascript.

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Live Site URL: [Interactive-rating-component](https://65d4a0ab75bf92d7520dccad--fastidious-bonbon-e77c34.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

I learned how to use addEventListener with arrays.
I had a hard time solving the buttons (supposedly, when you click a different button, the last one you clicked should return to its original state).fortunately, I solved it using 'for loop':

      for(let i = 0; i < rates.length; i++){
            rates[i].style.backgroundColor = "hsla(240, 1%, 36%, 0.199)";
            rates[i].style.color = "var(--Light-Grey)";
        }
        rates[i].style.backgroundColor = "rgb(255, 102, 0)";
        rates[i].style.color = "var(--White)";

### Continued development

I'm still new to javascript so coming up with the most efficient solution is hard for me.

## Author

- Frontend Mentor - [@pauleenann]
