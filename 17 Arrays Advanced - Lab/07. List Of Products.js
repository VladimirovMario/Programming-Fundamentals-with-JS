function listOfProducts(array) {
  const length = array.length;
  const sorted = array.sort();

  for (let i = 0; i < length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
console.log(`-----`);
listOfProducts(["Watermelon", "Banana", "Apples"]);
