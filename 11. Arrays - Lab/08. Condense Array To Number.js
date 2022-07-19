// While we have more than one element in the array nums[], repeat the following:
// Allocate a new array condensed[] of size nums.Length-1.
// Sum the numbers from nums[] to condensed[]:
// condensed[i] = nums[i] + nums[i+1]
// nums[] = condensed[]
// The process is illustrated below:

function condenseArrayToNumber(array) {
  let condensed = [];

  for (let i = 0; i < array.length; i++) {
    condensed.push(array[i]);
  }

  while (condensed.length > 1) {
    let temp = [];

    for (let i = 0; i < condensed.length - 1; i++) {
      temp.push(condensed[i] + condensed[i + 1]);
    }

    condensed = temp;
  }
  console.log(condensed.join());
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
