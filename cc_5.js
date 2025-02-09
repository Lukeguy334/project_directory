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