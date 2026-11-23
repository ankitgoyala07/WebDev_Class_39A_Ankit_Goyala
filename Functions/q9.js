// Question 9: Mobile Recharge System

const calculateBonus = (amount) => {
    if (amount >= 1000) {
        return amount * 15 / 100;
    }
    else if (amount >= 500) {
        return amount * 10 / 100;
    }
    else if (amount >= 100) {
        return amount * 5 / 100;
    }
    else {
        return 0;
    }
};

const calculateTotalBalance = (amount, bonus) => {
    return amount + bonus;
};

const recharge = (number, amount, callback) => {
    let bonus = calculateBonus(amount);
    let totalBalance = callback(amount, bonus);

    console.log("Mobile Number: " + number);
    console.log("Recharge Amount: Rs. " + amount);
    console.log("Bonus Received: Rs. " + bonus);
    console.log("Total Balance Credited: Rs. " + totalBalance);
};

recharge("9800000000", 1000, calculateTotalBalance);