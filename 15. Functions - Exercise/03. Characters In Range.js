function charactersInRange(firstChar, secondChar) {
  let firstCharAsNumber = firstChar.charCodeAt();
  let secondCharAsNumber = secondChar.charCodeAt();

  function findSmallerChar(firstNum, secondNum) {
    return Math.min(firstNum, secondNum);
  }
  let smallerChar = findSmallerChar(firstCharAsNumber, secondCharAsNumber);

  function findBiggerChar(firstNum, secondNum) {
    return Math.max(firstNum, secondNum);
  }
  let biggerChar = findBiggerChar(firstCharAsNumber, secondCharAsNumber);

  let result = [];
  for (let i = smallerChar + 1; i < biggerChar; i++) {
    result.push(String.fromCharCode(i));
  }
  console.log(result.join(` `));
}
charactersInRange("d", "a");
charactersInRange("#", ":");
