function treasureFinder(array) { // 0 ot 100
    let sequence = array.shift().split(` `).map(Number);
  
    let result = [];
  
    while (array[0] != "find") {
      let line = array.shift();
  
      let count = 0;
      for (let i = 0; i < line.length; i++) {
        let digitFromSequence = sequence[count];
        let currDigit = line[i].charCodeAt();
        currDigit -= digitFromSequence;
        let currChar = String.fromCharCode(currDigit);
  
        result.push(currChar);
        count++;
        if (count >= sequence.length) {
          count = 0;
        }
      }
    }
    let typePattern = /&(?<type>[A-Za-z]+)&/g;
    let coordinatesPattern = /<(?<coordinates>[A-Za-z0-9]+)>/gm;
  
    let matchType = typePattern.exec(result.join(``));
    let matchCoord = coordinatesPattern.exec(result.join(``));
  
    while (matchType !== null) {
      console.log(
        `Found ${matchType.groups.type} at ${matchCoord.groups.coordinates}`
      );
      matchType = typePattern.exec(result.join(``));
      matchCoord = coordinatesPattern.exec(result.join(``));
    }
  }
treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
// console.log(`---`);
// treasureFinder([
//   "1 4 2 5 3 2 1",
//   `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
//   "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
//   "'stj)>34W68Z@",
//   "find",
// ]);
