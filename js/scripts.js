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
    
};

// User Interface Logic

