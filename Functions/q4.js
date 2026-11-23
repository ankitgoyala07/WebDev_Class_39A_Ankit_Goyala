// Question 4: Movie Ticket Booking System

const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    }
    else if (age <= 17) {
        return 200;
    }
    else if (age <= 59) {
        return 300;
    }
    else {
        return 200;
    }
};

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total - (total * 10 / 100);
    }
    return total;
};

const bookTicket = (name, age, quantity, callback) => {
    let price = getTicketPrice(age);
    let total = callback(price, quantity);
    let discount = total < price * quantity
        ? price * quantity - total
        : 0;

    console.log("Customer: " + name);
    console.log("Age: " + age);
    console.log("Tickets: " + quantity);
    console.log("Total Before Discount: Rs. " + (price * quantity));
    console.log("Discount: Rs. " + discount);
    console.log("Final Amount: Rs. " + total);
};

bookTicket("Hari", 25, 5, (price, quantity) => {
    let total = calculateTotal(price, quantity);
    return applyDiscount(total, quantity);
});