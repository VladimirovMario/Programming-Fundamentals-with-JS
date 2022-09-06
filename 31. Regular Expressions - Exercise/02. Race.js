function race(array) {
  let participants = array.shift().split(`, `);

  let finalists = {};
  while (array[0] !== "end of race") {
    let currPerson = array.shift();
    let name = currPerson.match(/[A-Za-z]/g).join(``);
    let distances = currPerson.match(/\d/g).map(Number);

    if (participants.includes(name)) {
      if (finalists.hasOwnProperty(name) == false) {
        finalists[name] = 0;
      }

      let totalDistance = 0;
      for (let distance of distances) {
        totalDistance += distance;
      }
      finalists[name] += totalDistance;
    }
  }
  let sorted = Object.entries(finalists).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      console.log(`1st place: ${sorted[i][0]}`);
    } else if (i === 1) {
      console.log(`2nd place: ${sorted[i][0]}`);
    } else if (i === 2) {
      console.log(`3rd place: ${sorted[i][0]}`);
    }
  }
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
console.log(`---`);
race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
