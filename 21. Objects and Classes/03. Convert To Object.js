function convertToObject(jsonString) {
  let person = JSON.parse(jsonString);
  console.log(person);

  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log(`---`);
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
