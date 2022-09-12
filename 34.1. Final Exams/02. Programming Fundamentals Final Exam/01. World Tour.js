function worldTour(text) {
 
  let stops = text.shift();

  while (text[0] !== "Travel") {
    let tokens = text.shift().split(`:`);
    let command = tokens[0];

    if (command == "Add Stop") {
      let index = +tokens[1];
      let string = tokens[2];
      if (index >= 0 && index <= stops.length) {
        let first = stops.substring(0, index);
        let third = stops.substring(index);
        stops = first + string + third;
      }
      console.log(stops);
    } else if (command == `Remove Stop`) {
      let startIndex = +tokens[1];
      let endIndex = +tokens[2];
      if (
        startIndex >= 0 &&
        startIndex <= stops.length &&
        endIndex >= 0 &&
        endIndex <= stops.length 
      ) {
        let first = stops.substring(0, startIndex);
        let removedPart = stops.substring(endIndex + 1);
        stops = first + removedPart;
      }
      console.log(stops);
    } else if (command == `Switch`) {
      let oldString = tokens[1];
      let newString = tokens[2];
      if (stops.includes(oldString)) {
        stops = stops.replace(oldString, newString);
        
      } else {
        console.log(stops);
      }
    }
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
console.log(`---`);
worldTour([
  `Albania:Bulgaria:Cyprus:Deuchland`,
  `Add Stop:3:Nigeria`,
  `Remove Stop:4:8`,
  `Switch:Albania: Azərbaycan`,
  `Travel`,
]);
