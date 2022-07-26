function signCheck(numOne, numTwo, numThree) {
  if (numOne > 0 && numTwo > 0 && numThree > 0) {
    console.log("Positive");
  } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
    console.log("Negative");
  } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
    console.log("Negative");
  } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
    console.log("Negative");
  } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
    console.log("Positive");
  } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
    console.log("Positive");
  } else if (numOne > 0 && numTwo < 0 && numThree < 0) {
    console.log("Positive");
  } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
    console.log("Negative");
  }
}
signCheck(5, 12, -15); // Negative
signCheck(-6, -12, 14); // Positive
signCheck(-1, -2, -3); //Negative
signCheck(-5, 1, 1); //Negative
signCheck(1, 1, 1);
