function radioCrystals(array) {
  let target = array.shift();
  let index = 0;
  let element = array[index++];
  let startElement = element;

  let countCut = 0;
  let countLap = 0;
  let countGrind = 0;
  let countEtch = 0;
  let countXray = 0;

  while (element != target && element != undefined) {
    if (element / 4 >= target) {
      element = Math.trunc((element /= 4));
      countCut++;
    } else if (element * 0.8 >= target) {
      element = Math.trunc((element *= 0.8));
      countLap++;
    } else if (element - 20 >= target) {
      element = Math.trunc((element -= 20));
      countGrind++;
    } else if (element - 2 >= target - 1) {
      element = Math.trunc((element -= 2));
      countEtch++;
    } else {
      countXray++;
      if (countXray == 1) {
        element++;
      }
    }

    if (element === target) {
      console.log(`Processing chunk ${startElement} microns`);
      if (countCut > 0) {
        console.log(`Cut x` + countCut);
        console.log("Transporting and washing");
        countCut = 0;
      }
      if (countLap > 0) {
        console.log(`Lap x` + countLap);
        console.log("Transporting and washing");
        countLap = 0;
      }
      if (countGrind > 0) {
        console.log(`Grind x` + countGrind);
        console.log("Transporting and washing");
        countGrind = 0;
      }
      if (countEtch > 0) {
        console.log(`Etch x` + countEtch);
        console.log("Transporting and washing");
        countEtch = 0;
      }
      if (countXray > 0) {
        console.log(`X-ray x` + countXray);
        countXray = 0;
      }
      console.log(`Finished crystal ${element} microns`);
      element = array[index++];
      startElement = element;
    }
  }
}

radioCrystals([1375, 50000]);
console.log(`------------`);
radioCrystals([1000, 4000, 8100]);
