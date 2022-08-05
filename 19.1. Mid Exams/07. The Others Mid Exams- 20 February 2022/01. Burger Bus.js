function burgerBus(array) {
  let num = +array.shift();

  let count = 0;
  let totalProfit = 0;
  for (let i = 0; i < array.length; i += 3) {
      
    count++;
    let cityName = array[i];
    let profit = +array[i + 1];
    let expenses = +array[i + 2];

    if (count % 5 == 0) {
      profit *= 0.9;
    } else if (count % 3 == 0) {
      profit -= expenses * 0.5;
    }
    profit -= expenses;

    totalProfit += profit;
    console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
  }
  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
]);
console.log(`---`);
burgerBus([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
