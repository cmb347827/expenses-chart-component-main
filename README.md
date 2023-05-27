# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

[screenshot.png](https://postimg.cc/PPQLRqFF)

### Links

- Solution URL: [Github](https://github.com/cmb347827/expenses-chart-component-main)
- Live Site URL: [Github live](https://cmb347827.github.io/expenses-chart-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- Sass/SCSS
- Bootstrap
- jQuery/Javascript
- D3.js
- Mobile-first workflow

### What I learned

- This was a tricky project as I had to re-learn the D3 libary. The first challenge was importing the JSON file.
  I could only manage to do this with async/await and hosting the JSON file on some json server while using a proxy to get rid of the CORS policy error.
- The next challege was correctly getting the bottom x-axis day values lined up below the bars. When I added the added room for top and bottom margins (svgHeight), it worked out.
- The tooltips were the next hard part. Initially they did not pop up in the correct location.
  at first I tried to append the div for the tooltip to the svg element and that did not work. I read in a stackoverflow post not to do that, that it should be seperate.
  So I came up with the use of svgContainer, first to append the svg and then to append the tooltip.
  At first I had all the tooltip styling in the d3 section , but it would not work. Only when I removed it from there and added the #tooltip selector for styling to the SCSS file did that work.
  When I finally managed to align them semi-ok, they were still to high. I managed with the help of a stackoverflow post.

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascrip, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

- [working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [positioning D3 popups](https://stackoverflow.com/questions/16256454/d3-js-position-tooltips-using-element-position-not-mouse-position)

## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

