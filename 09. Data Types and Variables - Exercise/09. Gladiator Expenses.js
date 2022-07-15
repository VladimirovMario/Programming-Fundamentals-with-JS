function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    
    let sum = 0;
    let count = 0
    for (let fight = 1; fight <= lostFights; fight++) {
        if (fight % 2 === 0) {
            sum += helmetPrice;
        }
        if (fight % 3 === 0) {
            sum += swordPrice;
        }
        if (fight % 2 === 0 && fight % 3 === 0) {
            sum += shieldPrice
            count++
        }
        if (count === 2) {
            sum += armorPrice;
            count = 0;
        }

    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
// gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);