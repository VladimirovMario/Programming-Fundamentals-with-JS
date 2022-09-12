//plantsObject[plant][1].reduce((a, b) => a + b) / plantsObject[plant][1].length).toFixed(2)}
function plantDiscovery(array) {
    let n = +array.shift();
   
    let list = {};
    for (let i = 0; i < n; i++) { 
   
      let [plant, rarity] = array.shift().split(`<->`);
      rarity = +rarity;
   
      if (list.hasOwnProperty(plant) == false) {
        list[plant] = { rarity: 0, rating: [] };
      }
      list[plant].rarity += rarity;
    }
   
    while (array[0] != "Exhibition") {
   
      let line = array.shift();
      let tokens = line.split(`: `);
      let currPlant = tokens[1].split(` - `);
      let name = currPlant[0];
   
      if (list.hasOwnProperty(name)) {
   
        if (tokens[0] == "Rate") {
          let rating = +currPlant[1];
          list[name].rating.push(rating);
        }
   
        if (tokens[0] == "Update") {
          let newRarity = +currPlant[1];
          list[name].rarity = newRarity;
        }
   
        if (tokens[0] == "Reset") {
          list[name].rating = [];
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
   
      console.log(`- ${currPlant}; Rarity: ${list[currPlant].rarity}; Rating: ${average.toFixed(2)}`);
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