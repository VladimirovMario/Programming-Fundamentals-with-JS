function storage(supply) {
  let stocks = new Map();

  for (const string of supply) {
    const tokens = string.split(` `);
    const product = tokens[0];
    let quantity = +tokens[1];

    if (!stocks.has(product)) {
        stocks.set(product, +quantity);
    } else {
        let currQuantity = stocks.get(product);
        let newQuantity = currQuantity += quantity;
        stocks.set(product,newQuantity);
    }
  }
  for (const key of stocks){
      console.log(`${key[0]} -> ${key[1]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
console.log(`---`);
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
