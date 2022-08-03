function computerStore(input) {

  let index = 0;
  let command = input[index++];
  let totalPriceWithoutTaxes = 0;
  //ако трябва да се проверява повече от един параметър използваме &&
  while (command !== "special" && command !== "regular") {

    let priceForParts = Number(command);

    if (priceForParts >= 0) {
      totalPriceWithoutTaxes += priceForParts;
    } else {
      console.log("Invalid price!");
    }
    command = input[index++];
  }
  
  let totalPrice = totalPriceWithoutTaxes * 1.2;
  let taxes = totalPrice - totalPriceWithoutTaxes;

  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    if (command === "special") {
      totalPrice *= 0.9;
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  }
}
// computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
// computerStore(["regular"]);
