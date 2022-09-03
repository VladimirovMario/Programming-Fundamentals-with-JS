function serializeString(array) {
  let text = array[0];
  let result = {};

  for (let i = 0; i < text.length; i++) {
    const element = text[i];

    if (result.hasOwnProperty(element) == false) {
      result[element] = [];
    }
    result[element].push(i);
  }
  for (let currSymbol in result) {
    console.log(`${currSymbol}:${result[currSymbol].join(`/`)}`);
  }
}
serializeString(["abababaa"]);
console.log(`---`);
serializeString(["avjavamsdmcalsdm"]);
