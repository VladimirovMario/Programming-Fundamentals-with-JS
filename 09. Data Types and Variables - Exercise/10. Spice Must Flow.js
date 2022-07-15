function spiceMustFlow(startingYield) {
  const workers = 26;
  let count = 0;
  let sum = 0;
  while (startingYield >= 100) {
    sum += startingYield - workers;
    count++;
    startingYield -= 10;
  }
  if (sum > workers) {
    sum -= workers;
  }
  console.log(count);
  console.log(sum);
}
spiceMustFlow(450);
