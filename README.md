# _Portfolio - Aaron Brown_

#### By **Aaron Brown**

#### A site for ordering a pizza by Aaron Brown.  Uses html, css & javascript.


## Technologies Used

* html
* css
* javascript
* git
* vs code
* live server for vs code
* chrome

## Description

This page intended to showcase object oriented javascript.

## Setup Requirements

* clone the repository
* install vs code
* install live server for vs code
* open the repo in vs code
* open index.htm in browser using live server
* view the page via gitup pages here:  https://aaronvbrown.github.io/port/


## Known Bugs
* none at this time

## Tests
Describe:  Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: 
```javascript
const myPizza = new Pizza('medium', ["anchovies", "pineapple"]);
```
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }
Keep in mind that the Describe statement is listed once, for a single function. If there are multiple pieces of functionality that your Pizza() constructor function handles, you should write multiple tests (as many as are needed) under the same Describe block. If you have a different function, like a prototype method for Pizza objects, then you should have a separate Describe statement for that prototype method, along with any tests.

Test: "It should return a Pizza object with three properties for size, toppings and price"
Code: 
```javascript
const myPizza = new Pizza('medium', ["anchovies", "pineapple"]);
```
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium", 16.20 }

Code: 
```javascript
const myPizza = new Pizza('medium', ["anchovies", "pineapple", "pepperoni"]);
```
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "large", 21.06 }


## License
MIT License

Copyright (c) 2023 Aaron Brown