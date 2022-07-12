function integerAndFloat(a, b, c) {
  let sum = a + b + c;
  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
//   sum % 1 === 0 ? sum += ` - Integer` : sum += ` - Float`
//   console.log(sum);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
