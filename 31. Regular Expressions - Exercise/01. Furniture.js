function furniture(shopping) {
  let pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;

  console.log(`Bought furniture:`);

  let total = 0;
  while (shopping[0] !== "Purchase") {
    let currPurchase = shopping.shift();
    let boughtProduct = pattern.exec(currPurchase);

    if (boughtProduct !== null) {
      1;
      // This is an array: boughtProduct = pattern.exec(currPurchase);
      // Destructuring an array
      let [doNotNeedIt, product, price, qty] = boughtProduct;
      price = +price;
      qty = +qty;

      // At index zero is the whole `match`: doNotNeedIt [">>TV<<300!5"]
      // At index 1 is the first group : product
      //   console.log(boughtProduct[1]);
      // At index 2 is: `price`
      //   console.log(boughtProduct[2]);
      // At index 3 is : qty
      //   console.log(boughtProduct[3]);
      // If we have more: (and so on...)
      2;
      //   Destructuring an object
      //   let { doNotNeedIt, product, price, qty } = boughtProduct.groups;
      3;
      //   let product = boughtProduct.groups[`product`];
      //   let price = +boughtProduct.groups[`price`];
      //   let qty = +boughtProduct.groups[`qty`];

      total += price * qty;
      console.log(product);
    }
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

console.log(`---`);
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
console.log(`---`);
furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
