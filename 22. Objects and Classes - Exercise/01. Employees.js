function employees(array) {
  let person = {};
  for (let currName of array) {
    person.names = currName;
    person.personalNum = currName.length;

    console.log(
      `Name: ${person.names} -- Personal Number: ${person.personalNum}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

