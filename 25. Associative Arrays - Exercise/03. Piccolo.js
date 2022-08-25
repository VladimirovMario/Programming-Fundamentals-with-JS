function piccolo(cars) {
  let parking = {};

  for (const currCar of cars) {
    let [direction, carNumber] = currCar.split(`, `);

    if (direction === "IN") {
      parking[carNumber] = 0;
    } else {
      parking[carNumber] = null;
    }
  }
  let entry = Object.entries(parking);
  let filtered = entry.filter((x) => x[1] !== null);

  if (filtered.length !== 0) {
    let sorted = filtered.sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach((carNumber) => console.log(carNumber[0]));
  } else {
    console.log(`Parking Lot is Empty`);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
console.log(`---`);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
