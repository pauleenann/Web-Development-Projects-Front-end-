# Frontend Mentor - Expenses chart component solution

This is day 10 of learning javascript. I used 375px for mobile and 1440px for desktop.

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Links

- Live Site URL: [Expenses chart component](https://6683d963b62bfa37623e884a--eloquent-lamington-55ae09.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Chart.js
- Javascript

### What I learned

I learned how to use Chart.js and to play around with JSON

```js
let day = [];
let amount = [];

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    //iterates the day
    data.forEach((element) => {
      console.log(element.day);
      console.log(element.amount);
      day.push(element.day);
      amount.push(element.amount);
    });

    let myChart = document.getElementById("expenses-chart").getContext("2d");

    Chart.defaults.color = "hsl(28, 10%, 53%)";

    let expensesChart = new Chart(myChart, {
      type: "bar", // bar, horizontal, pie, line, doughnut, radar, polarArea

      data: {
        //eto yung nakalagay baba ng barchart
        labels: day,
        datasets: [
          {
            label: "Expenses",
            data: amount,
            //backgroundColor: 'green'
            backgroundColor: [
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(186, 34%, 60%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
            ],
            borderRadius: 5,
            hoverBackgroundColor: [
              "hsl(10, 89%, 75%)",
              "hsl(10, 89%, 75%)",
              "hsl(186, 34%, 70%)",
              "hsl(10, 89%, 75%)",
              "hsl(10, 89%, 75%)",
              "hsl(10, 89%, 75%)",
              "hsl(10, 89%, 75%)",
            ],
            //hoverBorderWidth: '3',
            //hoverBorderColor: '#000'
          },
        ],
      },
      options: {},
    });
  });
```

## Author

- Frontend Mentor - [@pauleenann](https://www.frontendmentor.io/home)
