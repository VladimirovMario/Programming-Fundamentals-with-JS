function phoneBook(phoneBook) {
  let person = {};
  for (const currPerson of phoneBook) {
    let [name, phoneNumber] = currPerson.split(` `);
    person[name] = phoneNumber;
  }
  //   Object.keys(person).forEach((name) => console.log(name, `->`, person[name]));
  for (let [name, phone] of Object.entries(person)) {
    console.log(name, `->`, phone);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
console.log(`----`);
phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
