// Business Logic

const sizesAvailable = {
    'small': 10.00,
    'medium': 12.50,
    'large': 15.00
};
const toppingsAvailable = ['olives', 'mushrooms', 'onions', 'peppers', 'tomatoes', 'pineapple', 'pepperoni', 'sausage', 'ham'];

//class method
// class Pizza {
//     constructor(size = 'small', toppings = []) {
//         this.size = size;
//         this.toppings = toppings;
//     }
//     pricePizza() {
//         let basePrice = sizesAvailable[this.size];
//         let topppingsPrice = this.toppings.length * basePrice/10;
//         let salesTax = .08 * (basePrice + topppingsPrice);
//         let totalPrice = basePrice + topppingsPrice + salesTax;
//         totalPrice = totalPrice.toFixed(2);
//         return totalPrice;
//     }
// }

//prototype method
function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.pricePizza = function () {
    let basePrice = sizesAvailable[this.size];
    let topppingsPrice = this.toppings.length * basePrice / 10;
    let salesTax = .08 * (basePrice + topppingsPrice);
    let totalPrice = basePrice + topppingsPrice + salesTax;
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}


// User Interface Logic
// generate checkboxes for toppings

function populateToppings() {
    //get the container that will hold the checkboxes
    const toppingsContainer = document.getElementById('toppingsForm');

    toppingsAvailable.forEach((topping) => {
        //create new checkbox element
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = topping;
        checkbox.id = topping;

        //create label for checkbox
        const label = document.createElement('label');
        label.textContent = topping;

        //create a break
        const lineBreak = document.createElement('br');

        //append the checkbox, label and break to the container element
        toppingsContainer.appendChild(checkbox);
        toppingsContainer.appendChild(label);
        toppingsContainer.appendChild(lineBreak);
    });
}



// this listener works.  All I really changed were the names and identifications
window.addEventListener("load", function() {
    let updateSize = document.getElementById("sizeInput");
    let updateOrderBtn = document.getElementById("orderButton");
    let order = document.getElementById("displayOrder");
    orderToppings = [];

    updateOrderBtn.addEventListener("click", function () {
        orderToppings.length = 0;
        toppingsAvailable.forEach((topping) => {
            //check each checkbox, add checked toppings to orderToppings
            const checkbox = document.getElementById(topping);
            if (checkbox.checked) {
                // console.log(topping)
                orderToppings.push(topping);
            }
        })
        let myPizza = new Pizza(updateSize.value, orderToppings);
        console.log(myPizza);
        console.log(myPizza.pricePizza());
        order.append(`Your're ordering a ${myPizza.size} pizza with the following toppings: ${myPizza.toppings}.`);
        order.append(`Your total is ${myPizza.pricePizza()}.`);
        order.removeAttribute("class");
    })
})




// tests for node
// let myPizza = new Pizza('medium', ["anchovies", "pineapple"]);
// console.log("The price for your pizza is : $" + myPizza.pricePizza());
// let myPizza2 = new Pizza('large', ["anchovies", "pineapple", "pepperoni"]);
// console.log("The price for your pizza is : $" + myPizza2.pricePizza());
// let myPizza3 = new Pizza('small', ["anchovies", "pineapple", "pepperoni", "ham"]);
// console.log("The price for your pizza is : $" + myPizza3.pricePizza());

