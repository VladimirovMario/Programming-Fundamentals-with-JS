function makeADictionary(array) {
  let obj = {};
  for (const iterator of array) {
    let parsed = JSON.parse(iterator);

    for (let [key, value] of Object.entries(parsed)) {
      obj[key] = value;
    }
  }
  // console.log(obj);
  Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .forEach((el) => console.log(`Term: ${el} => Definition: ${obj[el]}`));
}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Coffee":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
