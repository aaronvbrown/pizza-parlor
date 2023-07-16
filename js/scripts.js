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

// this listener failed entirely.  Does it just not like the names?
// window.addEventListener("load", function () {
//     let updateBtn = document.getElementById("update");
//     let displayOrder = document.getElementById("displayOrder");
    
//     updateBtn.addEventListener("click", function () {
//         displayOrder.removeAttribute("class");
//         preventDefault();

//     })

// })

// this listener works.  All I really changed were the names and identifications
window.addEventListener("load", function() {
    let updateOrderBtn = document.getElementById("orderButton");
    let order = document.getElementById("displayOrder");

    updateOrderBtn.addEventListener("click", function () {
        order.removeAttribute("class");
    })
})




// tests for node
let myPizza = new Pizza('medium', ["anchovies", "pineapple"]);
console.log("The price for your pizza is : $" + myPizza.pricePizza());
let myPizza2 = new Pizza('large', ["anchovies", "pineapple", "pepperoni"]);
console.log("The price for your pizza is : $" + myPizza2.pricePizza());
let myPizza3 = new Pizza('small', ["anchovies", "pineapple", "pepperoni", "ham"]);
console.log("The price for your pizza is : $" + myPizza3.pricePizza());

