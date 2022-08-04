function guineaPig(array) {
  let foodInKilos = Number(array[0]);
  let hayInkilos = Number(array[1]);
  let cover = Number(array[2]);
  let weightInkilos = Number(array[3]);

  let foodInGr = foodInKilos * 1000;
  let hayInGr = hayInkilos * 1000;
  let covers = cover * 1000;
  let weightInGr = weightInkilos * 1000;

  for (let index = 1; index <= 30; index++) {
    foodInGr -= 300;
    if (index % 2 === 0) {
      hayInGr -= foodInGr * 0.05;
    }
    if (index % 3 === 0) {
      covers -= weightInGr / 3;
    }
    if (foodInGr <= 0 || hayInGr <= 0 || covers <= 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }

  console.log(
    `Everything is fine! Puppy is happy! Food: ${(foodInGr / 1000).toFixed(
      2
    )}, Hay: ${(hayInGr / 1000).toFixed(2)}, Cover: ${(covers / 1000).toFixed(
      2
    )}.`
  );
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
