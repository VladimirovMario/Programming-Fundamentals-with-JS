function orders(product, quantity) {
  let price = 1;
  if (product === `coffee`) {
    price = 1.5;
  } else if (product === `water`) {
    price = 1.0;
  } else if (product === `coke`) {
    price = 1.4;
  } else if (product === `snacks`) {
    price = 2;
  }

  let totalPrice = price * quantity;
  console.log(totalPrice.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);
