function sorting(array) {
  array = array.sort((a, b) => b - a);
  let newArray = [];
  while (array.length > 0) {
    newArray.push(array.shift(), array.pop());
  }
  console.log(newArray.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
