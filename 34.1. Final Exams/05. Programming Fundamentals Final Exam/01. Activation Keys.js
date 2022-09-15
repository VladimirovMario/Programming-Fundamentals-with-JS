function activationKeys(array) {

  let rawKey = array.shift();

  while (array[0] != "Generate") {

    let tokens = array.shift().split(`>>>`);
    let command = tokens[0];

    if (command == "Contains") {

      let substring = tokens[1];

      if (rawKey.includes(substring)) {
        console.log(`${rawKey} contains ${substring}`);
      } else {
        console.log("Substring not found!");
      }
    }
    if (command == "Flip") {

      let upperOrLower = tokens[1];
      let startIndex = +tokens[2];
      let endIndex = +tokens[3];

      let firstPart = rawKey.substring(0, startIndex);
      let PartToChange = rawKey.substring(startIndex, endIndex);
      let thirdPart = rawKey.substring(endIndex);

      if (upperOrLower == "Upper") {

        PartToChange = PartToChange.toUpperCase();
        rawKey = firstPart + PartToChange + thirdPart;
        console.log(rawKey);
      }

      if (upperOrLower == "Lower") {

        PartToChange = PartToChange.toLowerCase();
        rawKey = firstPart + PartToChange + thirdPart;
        console.log(rawKey);
      }
    }
    if (command == "Slice") {

      let startIndex = +tokens[1];
      let endIndex = +tokens[2];
      
      let partToDelete = rawKey.substring(startIndex, endIndex);
      rawKey = rawKey.replace(partToDelete, ``);

      console.log(rawKey);
    }
  }
  console.log(`Your activation key is: ${rawKey}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
console.log(`---`);

activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
