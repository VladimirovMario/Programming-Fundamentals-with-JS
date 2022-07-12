function amazingNumbers(num) {
  let string = num.toString();
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  // let result = sum.toString().includes(9);
  // console.log(`${num} Amazing? ${result ? `True` : `False`}`);

  let result = sum.toString();
  let special = false;
  for (let j = 0; j < result.length; j++) {
    if (result[j] === `9`) {
      special = true;
    }
  }
  console.log(`${num} Amazing? ${special ? `True` : `False`}`);
}
amazingNumbers(1233);
amazingNumbers(999);
