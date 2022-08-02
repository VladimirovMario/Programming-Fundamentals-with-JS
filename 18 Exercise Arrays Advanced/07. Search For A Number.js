function searchForANumber(array, elements) {
  let sequence = elements[0];
  let numsToDelete = elements[1];
  let searchedNum = elements[2];
  let newArray = array.slice(0, sequence);
  let deletedPart = newArray.splice(0, numsToDelete);

  let searchedIndex = newArray.indexOf(searchedNum);
  let count = 0;
  while (searchedIndex !== -1) {
    count++;
    newArray.splice(searchedIndex, 1);
    searchedIndex = newArray.indexOf(searchedNum);
  }
  console.log(`Number ${searchedNum} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
