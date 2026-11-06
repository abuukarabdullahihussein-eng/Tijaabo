Q1
function greetCustomers(Names){

    console.log("welcome"+Names)
}
greetCustomers("    Bakar");
greetCustomers("    cabdala");
greetCustomers("    Hussein");
greetCustomers("    Mohamed");
Q2.
function calculateTotal(price, quantity) {
    let total = price * quantity;
    console.log("Total cost: $" + total);
}
calculateTotal(10, 3);
calculateTotal(25, 2);
Q3
function calculateAverage(mark1, mark2, mark3) {
    let average = (mark1 + mark2 + mark3) / 3;
    console.log("Average: " + average);
}

calculateAverage(80, 90, 70);
calculateAverage(60, 75, 85);
Q4
function calculatePay(hoursWorked, hourlyRate) {
    let pay = hoursWorked * hourlyRate;

    console.log("Employee pay: $" + pay);
}
calculatePay(8, 15);
Q5
function deliveryMessage(customerName, city = "Nairobi") {
    console.log(
        "Hello " + customerName +
        ", your delivery is going to " + city
    );
}

deliveryMessage("Ali", "Mogadishu");
deliveryMessage("Ahmed");
Q6
const calculateServiceCharge = function(billAmount) {
    let charge = billAmount * 0.10;

    console.log("Service charge: $" + charge);
};

calculateServiceCharge(100);
calculateServiceCharge(200);
Q7
const canRegister = function(age) {
    if (age >= 12) {
        console.log("Eligible for registration");
    } else {
        console.log("Not eligible");
    }
};

canRegister(15);
canRegister(10);
Q8
const calculateDiscount = function(price, discount) {
    let finalPrice = price - (price * discount / 100);

    console.log("Final price: $" + finalPrice);
};

calculateDiscount(100, 20);
calculateDiscount(200, 10);
Q9
const kilometersToMeters = kilometers =>
    console.log(kilometers * 1000);

kilometersToMeters(5);
kilometersToMeters(10);
Q10
const splitBill = (totalBill, numberOfFriends) => {
    if (numberOfFriends <= 0) {
        console.log("Error: Invalid number of friends");
    } else {
        let eachPerson = totalBill / numberOfFriends;
        console.log("Each person pays: $" + eachPerson);
    }
};

splitBill(100, 4);
splitBill(200, 0);
Q11
function areaDeclaration(length, width) {
    console.log("Declaration: " + (length * width));
}


const areaExpression = function(length, width) {
    console.log("Expression: " + (length * width));
};

const areaArrow = (length, width) =>
    console.log("Arrow: " + (length * width));

areaDeclaration(10, 5);
areaExpression(10, 5);
areaArrow(10, 5);
Q12

const storeName = "Cumar Online Store";

function welcomeMessage() {
    console.log("Welcome to " + storeName);
}

function receiptHeading() {
    console.log("Receipt: " + storeName);
}

welcomeMessage();
receiptHeading();
Q13
function calculateDailyPay(hours, rate) {
    let dailyPay = hours * rate;

    console.log("Daily pay: $" + dailyPay);
}

14
function calculateOrder(total) {
    if (total >= 5000) {
        let discount = total * 0.10;

        let payable = total - discount;

        console.log("Discount: $" + discount);
        console.log("Payable: $" + payable);
    } else {
        console.log("No discount");
        console.log("Payable: $" + total);
    }
}

calculateOrder(6000);
calculateOrder(3000);
Q15

let deliveryFee = 200;

function promotionalOrder() {
    // Local variable
    let deliveryFee = 100;

    console.log("Inside function: $" + deliveryFee);
}


q16
function checkStock(inStock) {
    if (inStock) {
        var message1 = "Product is available";
        let message2 = "Product is in stock";
    }

    console.log(message1);

  
}

checkStock(true);
q17
function numberTickets(ticketCount) {
    for (let i = 1; i <= ticketCount; i++) {
        console.log("Ticket number: " + i);
    }

  
}

numberTickets(5);
Q18

const TAX_RATE = 0.16;

function calculateOrderPrice(subtotal, deliveryFee) {

    let tax = subtotal * TAX_RATE;

    let finalTotal = subtotal + tax + deliveryFee;

    console.log("Subtotal: $" + subtotal);
    console.log("Tax: $" + tax);
    console.log("Delivery: $" + deliveryFee);
    console.log("Final total: $" + finalTotal);
}

calculateOrderPrice(1000, 100);
calculateOrderPrice(2000, 200);
q19
function calculateDailySales(...sales) {
    let total = 0;

    for (let sale of sales) {
        total = total + sale;
    }

    console.log("Daily sales: $" + total);
}

calculateDailySales(100, 200);
calculateDailySales(100, 200, 300, 400, 500);
calculateDailySales();
Q20
function calculateDailySales(...sales) {
    let total = 0;

    for (let sale of sales) {
        total = total + sale;
    }

    console.log("Daily sales: $" + total);
}

calculateDailySales(100, 200);
calculateDailySales(100, 200, 300, 400, 500);
calculateDailySales();
//q21
const prices = [100, 200, 300, 400];

const discountedPrices = prices.map(price =>
    price * 0.85
);

console.log("Original prices:", prices);
console.log("Discounted prices:", discountedPrices);
q22
function findPassedStudents(students, passMark) {
    console.log("Students who passed:");

    students.filter(student => student.score >= passMark)
        .forEach(student => {
            console.log(student.name + ": " + student.score);
        });
}

const students = [
    { name: "Ali", score: 80 },
    { name: "Ahmed", score: 45 },
    { name: "Cumar", score: 90 },
    { name: "Hassan", score: 60 }
];

findPassedStudents(students, 50);

findPassedStudents(students, 75);
23
function findPassedStudents(students, passMark) {
    console.log("Students who passed:");

    students.filter(student => student.score >= passMark)
        .forEach(student => {
            console.log(student.name + ": " + student.score);
        });
}

const students = [
    { name: "Ali", score: 80 },
    { name: "Ahmed", score: 45 },
    { name: "Cumar", score: 90 },
    { name: "Hassan", score: 60 }
];

findPassedStudents(students, 50);

findPassedStudents(students, 75);

q24
function createTicketCounter(deskName, ticketCount) {

    let counter = 0;
    const increaseCounter = function() {
        counter++;

        console.log(deskName + ": Ticket " + counter);
    };
    for (let i = 1; i <= ticketCount; i++) {
        increaseCounter();
    }
}

createTicketCounter("Desk 1", 3);
createTicketCounter("Desk 2", 2);
Q25

const storeName = "Cumar Online Store";
const TAX_RATE = 0.16;


function checkout(cart, discountPercent = 0) {

    
    let subtotal = 0;
    let discountAmount = 0;
    let tax = 0;
    let finalTotal = 0;
    let deliveryMessage = "Delivery fee applies.";

   
    const calculateItemTotal = function(item, callback) {
        let itemTotal = item.price * item.quantity;
        callback(itemTotal);
    };

    cart.forEach(item => {
        calculateItemTotal(item, total => {
            subtotal += total;
        });
    });

    
    const calculateDiscount = (amount, percent) =>
        amount * percent / 100;

    discountAmount = calculateDiscount(
        subtotal,
        discountPercent
    );


    let discountedSubtotal = subtotal - discountAmount;

    tax = discountedSubtotal * TAX_RATE;

    finalTotal = discountedSubtotal + tax;

  
    if (discountedSubtotal >= 5000) {
        let freeDeliveryMessage = "Congratulations! Free delivery!";
        deliveryMessage = freeDeliveryMessage;
    }

    // Receipt object
    const receipt = {
        store: storeName,
        subtotal: subtotal,
        discount: discountAmount,
        tax: tax,
        finalTotal: finalTotal,
        delivery: deliveryMessage
    };

    console.log(receipt);
}



const cart1 = [
    { name: "Laptop", price: 4000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 }
];

checkout(cart1, 10);



const cart2 = [
    { name: "Keyboard", price: 1000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 1 }
];

checkout(cart2, 5);



const cart3 = [];

checkout(cart3);