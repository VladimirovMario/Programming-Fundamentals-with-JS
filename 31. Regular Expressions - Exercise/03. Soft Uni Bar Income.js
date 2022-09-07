function softUniBarIncome(array) {
  // проверка за отрицателно или положително число с плаваща или без плаваща запетая
  //(-?\d+(?:\.\d+)?)
  let pattern = /%([A-Z][a-z]+)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;

  let total = 0;
  while (array[0] !== "end of shift") {
    let line = array.shift();
    let currPurchase = pattern.exec(line);
    if (currPurchase !== null) {
      let [_, name, product] = currPurchase;
      let count = +currPurchase[3];
      let price = +currPurchase[4];
      total += count * price;

      console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`);
    }
  }
  console.log("Total income: " + total.toFixed(2));
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
console.log(`---`);
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
