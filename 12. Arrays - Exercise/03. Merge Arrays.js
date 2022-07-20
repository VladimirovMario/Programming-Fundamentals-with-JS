function mergeArrays(array1, array2) {
  let mergedArray = [];

  for (let index = 0; index < array1.length; index++) {
    if (index % 2 === 0) {
      let currentNumArr1 = Number(array1[index]);
      let currentNumArr2 = Number(array2[index]);
      mergedArray.push(currentNumArr1 + currentNumArr2);
    } else {
      let currentWordArr1 = array1[index];
      let currentWordArr2 = array2[index];
      mergedArray.push(currentWordArr1 + currentWordArr2);
    }
  }
  console.log(mergedArray.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);

