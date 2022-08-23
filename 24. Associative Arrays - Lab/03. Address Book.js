function addressBook(address) {
  let book = {};
  for (const name of address) {
    let [currName, currAddress] = name.split(`:`);
    book[currName] = currAddress;
  }
  Object.keys(book)
    .sort((a, b) => a.localeCompare(b))
    .forEach((name) => console.log(name, `->`, book[name]));
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);

console.log(`---`);

addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
