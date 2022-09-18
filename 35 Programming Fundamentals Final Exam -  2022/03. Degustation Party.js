function degustationParty(array) {
  let meals = {};
  let dislike = 0;

  while (array[0] !== "Stop") {

    let [command, name, food] = array.shift().split(`-`);

    if (command === "Like") {

      if (meals.hasOwnProperty(name) == false) {
        meals[name] = { meal: [] };
      }
      if (meals[name].meal.includes(food) == false) {
        meals[name].meal.push(food);
      }
    }
    if (command === `Dislike`) {
      
      if (meals.hasOwnProperty(name)) {
        if (meals[name].meal.includes(food)) {
          dislike++;

          let result = [];
          for (let i = 0; i < meals[name].meal.length; i++) {
            let curr = meals[name].meal[i];

            if (meals[name].meal[i] !== food) {
              result.push(curr);
            }
          }
          meals[name].meal = result;

          console.log(`${name} doesn't like the ${food}.`);
        } else {
          console.log(
            `${name} doesn't have the ${food} in his/her collection.`
          );
        }
      }
      if (meals.hasOwnProperty(name) == false) {
        console.log(`${name} is not at the party.`);
      }
    }
  }

  for (let name in meals) {
    console.log(`${name}: ${meals[name].meal.join(`, `)}`);
  }
  console.log(`Unliked meals: ${dislike}`);
}
degustationParty([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Penelope-dessert",
  "Like-Misho-salad",
  "Stop",
]);

console.log(`---`);
degustationParty([
  "Like-Krisi-shrimps",
  "Dislike-Vili-carp",
  "Dislike-Krisi-salad",
  "Stop",
]);

console.log(`---`);
degustationParty([
  "Like-Katy-fish",
  "Like-Katy-salad",
  "Like-Katy-banana",
  "Dislike-Katy-fish",
  "Stop",
]);
