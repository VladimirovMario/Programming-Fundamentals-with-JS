function reverseInPlace(array) {
  // let result = ``
  // for (let i = array.length - 1; i >= 0; i--) {
  // result += `${array[i]} `
  // }
  // console.log(result);

  for (let i = 0; i < array.length / 2; i++) {
    let first = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = first;
  }
  console.log(array.join(` `));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(["33", "123", "0", "dd"]);
