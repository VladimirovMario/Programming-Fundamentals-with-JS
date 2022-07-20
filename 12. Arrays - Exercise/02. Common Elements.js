function commonElements(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let currentWordArr1 = array1[i];
    for (let i = 0; i < array2.length; i++) {
      let currentWordArr2 = array2[i];
      if (currentWordArr1 === currentWordArr2) {
        console.log(currentWordArr1);
      }
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);

commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
