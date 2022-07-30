function lastKNumbersSequence(rotations, k) {
  let newArray = [1];
  for (let i = 1; i < rotations; i++) {
    let startNum = newArray.slice(-k);
    let sum = 0;
    for (const iterator of startNum) {
      sum += iterator;
    }
    newArray.push(sum);
  }
  console.log(newArray.join(` `));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
