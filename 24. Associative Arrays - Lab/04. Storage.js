function storage(supply) {
  const stocks = {};

  for (const product of supply) {
    const [currentProduct, quantity] = product.split(` `);

    if (!stocks.hasOwnProperty(currentProduct)) {
      stocks[currentProduct] = 0;
    }
    stocks[currentProduct] += Number(quantity);
  }

  for (const product in stocks) {
    console.log(`${product} -> ${stocks[product]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
console.log(`---`);
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
