# Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

- Allow the user to choose toppings and size for the pizza they'd like to order.
- Create a pizza object constructor with properties for toppings and size.
- Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
- Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.

# Your business logic and user interface logic should be separated. In addition to that, do your best to follow the principle of separation of concerns for the functions that you create.

# Tests
- Develop your business logic using test-driven development. 
- Begin with the simplest possible functionality that your project should demonstrate. 
- You should have pseudocode tests in your README.md for all business logic functionality.

# The code snippet below has an example first test for a Pizza constructor function. (Take note: you can choose to name your constructor function differently; and also, you don't need to structure the properties in the same way that is shown.)

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }
Keep in mind that the Describe statement is listed once, for a single function. If there are multiple pieces of functionality that your Pizza() constructor function handles, you should write multiple tests (as many as are needed) under the same Describe block. If you have a different function, like a prototype method for Pizza objects, then you should have a separate Describe statement for that prototype method, along with any tests.

Keep in mind, you do not have to write tests for user interface Logic, which is any code that accesses or updates the DOM. Only write tests for your business logic. In the above example, the Pizza() constructor function is a part of the business logic.


<!-- tests for node -->
```javascript
let myPizza = new Pizza('medium', ["anchovies", "pineapple"]);
console.log("The price for your pizza is : $" + myPizza.pricePizza());
let myPizza2 = new Pizza('large', ["anchovies", "pineapple", "pepperoni"]);
console.log("The price for your pizza is : $" + myPizza2.pricePizza());
let myPizza3 = new Pizza('small', ["anchovies", "pineapple", "pepperoni", "ham"]);
console.log("The price for your pizza is : $" + myPizza3.pricePizza());
```

 
<!-- this listener failed entirely.  Does it just not like the names? -->
```javascript
window.addEventListener("load", function () {
    let updateBtn = document.getElementById("update");
    let displayOrder = document.getElementById("displayOrder");
 
    updateBtn.addEventListener("click", function () {
        displayOrder.removeAttribute("class");
        preventDefault();
    })
}) 
```