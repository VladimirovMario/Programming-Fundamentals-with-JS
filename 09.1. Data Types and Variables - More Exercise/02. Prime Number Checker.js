function primeNumberChecker(num) {
  let isPrime = true;

  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && num > 2) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}
primeNumberChecker(8);
primeNumberChecker(5);
primeNumberChecker(81);
