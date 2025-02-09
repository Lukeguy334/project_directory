// Task 1 - Customer Profile
let customer = { name: "John Doe", 
    age: 35, 
    email: "john.doe@email.com" }

console.log(customer.name); // John Doe
console.log(customer.age); // 35
console.log(customer.email);

// Task 2 - Order Details
let order = { 
    orderId: 12345, 
    totalAmount: 150, 
    status: "Processing", 

    // Method to display order details
displayOrder: function() {
    console.log(`Order ID: ${this.orderId}, 
    Total Amount: ${this.totalAmount}, 
    Status: ${this.status}`);
    }
};
 order.displayOrder(); //call the method and log the details

// Task 3 - array manipulation
let cartItems = ["Laptop", "Mouse", "Keyboard"];
cartItems.push("Monitor");
cartItems.pop();
cartItems.unshift("Headphones");
cartItems.shift();
console.log(cartItems);

// Task 4 - Price Adjustment
prices = [100, 200, 300]
.map(price => price - price * 0.1);
console.log(prices);

// Task 5 - Product Avaliability
inventory = [5, 0, 10, 3, 7]
.filter(stock => stock > 0);
console.log(inventory);

// Task 6 - Reduce Method
sales = [100, 200, 300, 400, 500]
.reduce((total, amount) => total + amount);
console.log(sales);

// Task 7 - Customer Search
customers = ["Alice", "Bob", "Charlie", "David"]
.find(customer => customer === "Charlie");
console.log(customers);

// Task 8 - Tax Calculation
function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`The tax on $${amount} at a rate of ${taxRate * 100}% is $${tax.toFixed(2)}`);
}
calculateTax(100, 0.07); // 7.00

// Task 9 - Discount Application
const applyDiscount = function(price, discount) { //function to apply discount
    let discountedPrice = price - (price * discount);
    console.log(`Price after discount: $${discountedPrice.toFixed(2)}`);
    return discountedPrice;
};
applyDiscount(100, 0.2); // 80.00

// Task 10 - Loyalty Points
const calculatePoints = (purchaseAmount) => { //function to calculate points
    let points = Math.floor(purchaseAmount / 10);
    console.log(`You have earned ${points} points`);
    return points;
};
calculatePoints(100); // 10