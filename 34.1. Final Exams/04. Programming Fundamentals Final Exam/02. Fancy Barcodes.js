function fancyBarcodes(array) {
  
  let n = +array.shift();
  let pattern = /@#+(?<barcode>[A-Z][a-zA-Z0-9]{4,}[A-Z])@#+/;

  for (let i = 0; i < n; i++) {
    let line = pattern.exec(array[i]);

    if (line !== null) {
      let valid = line.groups.barcode;

      let productGroup = ``;
      for (let currSymbol of valid) {

        if (isNaN(currSymbol) === false) {
          productGroup += currSymbol;
        }
      }
      if (productGroup == ``) {
        productGroup = `00`;
      }

      console.log(`Product group: ${productGroup}`);

    } else {
      console.log("Invalid barcode");
    }
  }
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log(`---`);
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
