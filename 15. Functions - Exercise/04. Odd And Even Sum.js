function oddAndEvenSum(num) {
  function sumOddNums(odd) {
    let sumOdd = 0;
    for (let i = 0; i < length; i++) {
      if (odd[i] % 2 !== 0) {
        sumOdd += Number(odd[i]);
      }
    }
    return sumOdd;
  }

  function sumEven(even) {
    let sumEven = 0;
    for (let i = 0; i < length; i++) {
      if (even[i] % 2 === 0) {
        sumEven += Number(even[i]);
      }
    }
    return sumEven;
  }

  let numAsString = num.toString();
  let length = numAsString.length;
  
  console.log(
    `Odd sum = ${sumOddNums(numAsString)}, Even sum = ${sumEven(numAsString)}`
  );
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
