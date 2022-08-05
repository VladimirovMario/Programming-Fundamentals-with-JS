function cookingMasterclass(array) {
  let budget = array[0];
  let students = array[1];
  let pricePackageFlour = array[2];
  let priceSingleEgg = array[3];
  let priceApron = array[4];

  let freeFlour = 0;
  if (students % 5 == 0) {
    freeFlour = students / 5;
  }

  let totalPrice =
    priceApron * Math.ceil(students + students * 0.2) +
    priceSingleEgg * 10 * students +
    pricePackageFlour * (students - freeFlour);

  if (totalPrice <= budget) {
    console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
  } else {
    let neededMoney = Math.abs(budget - totalPrice).toFixed(2);
    console.log(`${neededMoney}$ more needed.`);
  }
}
cookingMasterclass([50, 2, 1.0, 0.1, 10.0]);

cookingMasterclass([100, 25, 4.0, 1.0, 6.0]);

cookingMasterclass([946, 20, 12.05, 0.42, 27.89]);
