//https://en.wikipedia.org/wiki/Palindrome
function palindromeIntegers(array) {
  const length = array.length;

  function reverseNum(num) {
    const numAsString = num.toString();
    const numAsArray = numAsString.split(``);
    const reversedNumAsArray = numAsArray.reverse();
    const reversedNumAsString = reversedNumAsArray.join(``);
    const reversedNum = Number(reversedNumAsString);
    //let reversedNum = Number(num.toString().split(``).reverse().join(``));
    return reversedNum;
  }

  for (let i = 0; i < length; i++) {
    let currentNum = array[i];
    if (currentNum === reverseNum(currentNum)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32,2,232,1010]);
