// Question 8: Restaurant Order Management System

const getFoodPrice = (foodName) => {
    if (foodName === "Burger") {
        return 250;
    }
    else if (foodName === "Pizza") {
        return 500;
    }
    else if (foodName === "Momo") {
        return 150;
    }
    else if (foodName === "Chowmein") {
        return 180;
    }
    else {
        return -1;
    }
};

const calculateServiceCharge = (total) => {
    return total * 5 / 100;
};

const calculateOrder = (foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === -1 || quantity <= 0) {
        return -1;
    }

    return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    let foodAmount = callback(foodName, quantity);

    if (foodAmount === -1) {
        console.log("Invalid food item or quantity!");
        return;
    }

    let serviceCharge = calculateServiceCharge(foodAmount);
    let finalAmount = foodAmount + serviceCharge;

    console.log("Customer: " + customerName);
    console.log("Food: " + foodName);
    console.log("Quantity: " + quantity);
    console.log("Food Amount: Rs. " + foodAmount);
    console.log("Service Charge: Rs. " + serviceCharge);
    console.log("Final Amount: Rs. " + finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);