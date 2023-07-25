// Business Logic


//prototype method
function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.sizesAvailable = {
    'small': 10.00,
    'medium': 12.50,
    'large': 15.00
};

Pizza.prototype.toppingsAvailable = ['olives', 'mushrooms', 'onions', 'peppers', 'tomatoes', 'pineapple', 'pepperoni', 'sausage', 'ham'];

Pizza.prototype.pricePizza = function () {
    let basePrice = this.sizesAvailable[this.size];
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
    
    Pizza.prototype.toppingsAvailable.forEach((topping) => {
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


window.addEventListener("load", function () {
    let updateSize = document.getElementById("sizeInput");
    let updateOrderBtn = document.getElementById("orderButton");
    let orderDisplayContainer = document.getElementById("displayOrder");
    orderToppings = [];

    updateOrderBtn.addEventListener("click", function () {
        orderToppings.length = 0;
        Pizza.prototype.toppingsAvailable.forEach((topping) => {
            //check each checkbox, add checked toppings to orderToppings
            const checkbox = document.getElementById(topping);
            if (checkbox.checked) {
                orderToppings.push(topping);
            }
        })
        let myPizza = new Pizza(updateSize.value, orderToppings);
        const lineBreak = document.createElement('br');
        const para = document.createElement('p');
        const ul = document.createElement('ul');

        orderDisplayContainer.appendChild(lineBreak);
        orderDisplayContainer.append(`You're ordering a ${myPizza.size} pizza.`);
        orderDisplayContainer.appendChild(lineBreak);
        orderDisplayContainer.append(`You've selected the following toppings:`)
        orderDisplayContainer.appendChild(ul);
        orderDisplayContainer.append(`${myPizza.toppings}.`);
        orderDisplayContainer.appendChild(lineBreak);
        orderDisplayContainer.append(`Your total is $${myPizza.pricePizza()}.`);
        orderDisplayContainer.removeAttribute("class");
    })
})





