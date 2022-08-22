function catalogue(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    let [name, price] = array[i].split(` : `);
    price = +price;
    let firstLetter = name.slice(0, 1);
    if (result.hasOwnProperty(firstLetter) == false) {
      result[firstLetter] = {};
    }
    if (result.hasOwnProperty(name) == false) {
      result[firstLetter][name] = price;
    }
  }

  let sort = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (let products of sort) {
    let sortProduct = Object.entries(result[products]);
    sortProduct.sort((a, b) => a[0].localeCompare(b[0]));
    console.log(products);
    for (let [productName, productPrice] of sortProduct) {
      console.log(`  ${productName}: ${productPrice}`);
    }
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
console.log(`---`);
catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
