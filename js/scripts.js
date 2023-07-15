// Business Logic

const sizesAvailable = {
    'small':    10.00,
    'medium':   12.50,
    'large':    15.00
};
const toppingsAvailable = ['cheese', 'olives', 'mushrooms', 'onions', 'peppers', 'tomatoes', 'pineapple','pepperoni', 'sausage', 'ham'];

class Pizza {
    constructor(size = 'small', toppings = []) {
        this.size = size;
        this.toppings = toppings;
    }
    pricePizza() {
        let basePrice = sizesAvailable[this.size];
        let topppingsPrice = this.toppings.length * basePrice/10;
        let salesTax = .08 * (basePrice + topppingsPrice);
        let totalPrice = basePrice + topppingsPrice + salesTax;
        totalPrice = totalPrice.toFixed(2);
        
        return totalPrice;
    }
};

// User Interface Logic

// tests for node
let myPizza = new Pizza('medium', ["anchovies", "pineapple"]);
console.log("The price for your pizza is : $" + myPizza.pricePizza());
let myPizza2 = new Pizza('large', ["anchovies", "pineapple", "pepperoni"]);
console.log("The price for your pizza is : $" + myPizza2.pricePizza());

