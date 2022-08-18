/*function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.speak = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let allCats = [];
  for (let currentCat of array) {
    let tokens = currentCat.split(` `);
    allCats.push(new Cat(tokens[0], Number(tokens[1])));
  }  
   allCats.map(cat=> cat.speak())
}
cats(["Mellow 2", "Tom 5"]);
console.log(`----`);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);*/

function cats(arrayOfCats) {
  class Cat {
    constructor(nameOfCat, ageOfCat) {
      this.name = nameOfCat;
      this.age = ageOfCat;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let allCats = [];
  for (let i = 0; i < arrayOfCats.length; i++) {
    let tokens = arrayOfCats[i].split(` `);
    let nameOfCat = tokens[0];
    let ageOfCat = Number(tokens[1]);

    let cat = new Cat(nameOfCat, ageOfCat);
    allCats.push(cat);
  }
  // console.log(allCats); //[ Cat { name: 'Mellow', age: 2 }, Cat { name: 'Tom', age: 5 } ]

  for (let j = 0; j < allCats.length; j++) {
    allCats[j].meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
