function personInfo(firstName, thirdName, age) {
  // let person = { firstName: firstName, lastName: thirdName, age: age };
  let person = {};
  person.firstName = firstName;
  person["lastName"] = thirdName;
  person.age = age;

  console.log(person.lastName);
  return person;
}
console.log(personInfo("Peter", "Pan", "20"));
// personInfo("George", "Smith", "18");
