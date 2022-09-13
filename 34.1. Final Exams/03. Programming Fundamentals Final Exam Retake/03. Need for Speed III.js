function needForSpeed(array) {
  let n = +array.shift();

  let garage = {};
  for (let i = 0; i < n; i++) {
    let [model, mileage, fuel] = array.shift().split(`|`);
    mileage = +mileage;
    fuel = +fuel;

    garage[model] = { mileage, fuel };
  }
  while (array[0] !== "Stop") {
    let tokens = array.shift().split(` : `);
    let [command, car] = tokens;

    if (command == "Drive") {
      let distance = +tokens[2];
      let fuel = +tokens[3];

      garage[car].fuel -= fuel;

      if (garage[car].fuel < 0) {
        garage[car].fuel += fuel;

        console.log("Not enough fuel to make that ride");
      } else {
        garage[car].mileage += distance;

        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      }
      if (garage[car].mileage >= 100000) {
        delete garage[car];

        console.log(`Time to sell the ${car}!`);
      }
    }
    if (command == "Refuel") {
      let refuel = +tokens[2];

      let currFuel = Math.min(75 - garage[car].fuel, refuel); // za nauchavane
      garage[car].fuel += currFuel;

      console.log(`${car} refueled with ${currFuel} liters`);
    }
    if (command == "Revert") {
      let amountReverted = +tokens[2];
      garage[car].mileage -= amountReverted;

      if (garage[car].mileage < 10000) {
        garage[car].mileage = 10000;
      } else {
        console.log(`${car} mileage decreased by ${amountReverted} kilometers`);
      }
    }
  }

  for (const currCar in garage) {
    console.log(
      `${currCar} -> Mileage: ${garage[currCar].mileage} kms, Fuel in the tank: ${garage[currCar].fuel} lt.`
    );
  }
}

needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
console.log(`---`);
needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
