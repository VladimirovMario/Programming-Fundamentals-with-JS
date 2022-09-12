function plantDiscovery(array) {
  let n = +array.shift();

  let list = {};
  for (let i = 0; i < n; i++) {
    let [plant, rarity] = array.shift().split(`<->`);
    rarity = +rarity;
    list[plant] = { rarity, rating: [] };
  }

  while (array[0] != "Exhibition") {
    let tokens = array.shift().split(`: `);
    let currPlant = tokens[1].split(` - `);

    if (list.hasOwnProperty(currPlant[0])) {
      if (tokens[0] == "Rate") {
        list[currPlant[0]].rating.push(+currPlant[1]);
      } else if (tokens[0] == "Update") {
        list[currPlant[0]].rarity = +currPlant[1];
      } else if (tokens[0] == "Reset") {
        list[currPlant[0]].rating = [];
      }
    } else {
      console.log(`error`);
    }
  }
  console.log(`Plants for the exhibition:`);
  for (let currPlant in list) {
    let average = 0;
    for (let currRating of list[currPlant].rating) {
      average += currRating;
    }
    if (list[currPlant].rating.length !== 0) {
      average /= list[currPlant].rating.length;
    }
    console.log(
      `- ${currPlant}; Rarity: ${
        list[currPlant].rarity
      }; Rating: ${average.toFixed(2)}`
    );
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
console.log(`---`);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
