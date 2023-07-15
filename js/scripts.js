// Business Logic

const sizes = {
    'small':    10.00,
    'medium':   12.50,
    'large':    15.00
};
const toppings = ['cheese', 'olives', 'mushrooms', 'onions', 'peppers', 'tomatoes', 'pineapple','pepperoni', 'sausage', 'ham'];

class pizza {
    constructor(size = 'small', toppings = []) {
        this.size = size;
        this.toppings = toppings;
    }
    
};

// User Interface Logic

