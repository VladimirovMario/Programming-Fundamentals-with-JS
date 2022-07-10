function thePyramidOfKingDjoser(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let steps = 1;

  while (base >= 1) {
    if (base > 2) {
      if (steps % 5 === 0) {
        lapisLazuli += (base - 1) * 4 * increment;
      } else {
        marble += (base - 1) * 4 * increment;
      }
      steps++;

      stone += Math.pow(base - 2, 2) * increment;
    } else {
      gold += Math.pow(base, 2) * increment;
    }
    base -= 2;
    console.log(base);
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}
thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);
