function valueOfString(array) {
  let sum = 0;
  if (array[1] === "LOWERCASE") {
    for (const iterator of array[0]) {
      let currLowerCase = iterator.charCodeAt();

      if (currLowerCase >= 97 && currLowerCase <= 122) {
        sum += currLowerCase;
      }
    }
  } else if (array[1] === "UPPERCASE") {
    for (const iterator of array[0]) {
      let currUpperCase = iterator.charCodeAt();

      if (currUpperCase >= 65 && currUpperCase <= 90) {
        sum += currUpperCase;
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
valueOfString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
valueOfString(["AC/DC", "UPPERCASE"]);
