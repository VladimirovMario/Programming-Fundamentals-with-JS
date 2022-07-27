//https://www.asciitable.com/
function passwordValidator(password) {
  const length = password.length;

  function isLengthEnough(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
  function onlyLettersAndDigits(pass) {
    for (let i = 0; i < length; i++) {
      let currentElement = pass[i];
      let currentSymbol = currentElement.charCodeAt();
      if (
        (currentSymbol >= 48 && currentSymbol <= 57) ||
        (currentSymbol >= 65 && currentSymbol <= 90) ||
        (currentSymbol >= 97 && currentSymbol <= 122)
      ) {
      } else {
        return false;
      }
    }
    return true;
  }
  function isDigitsEnough(digits) {
    let count = 0;
    for (let i = 0; i < length; i++) {
      let currentElement = digits[i];
      let currentNum = currentElement.charCodeAt();
      if (currentNum >= 48 && currentNum <= 57) {
        count++;
      }
    }
    if (count >= 2) {
      return true;
    } else {
      return false;
    }
  }

  if (
    isLengthEnough(password) &&
    onlyLettersAndDigits(password) &&
    isDigitsEnough(password)
  ) {
    console.log("Password is valid");
  }
  if (!isLengthEnough(password)) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!onlyLettersAndDigits(password)) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isDigitsEnough(password)) {
    console.log("Password must have at least 2 digits");
  }
}
passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
