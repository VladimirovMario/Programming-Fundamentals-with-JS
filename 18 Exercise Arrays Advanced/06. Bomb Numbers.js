function bombNumbers(array, bomb) {
  const sequence = array.slice(0);
  const bombNumber = bomb[0];
  const bombPower = bomb[1];

  let searchForBomb = sequence.indexOf(bombNumber);
  while (searchForBomb !== -1) {
    const start = Math.max(0, searchForBomb - bombPower);
    const bombLength = bombPower * 2 + 1;
    sequence.splice(start, bombLength);
    searchForBomb = sequence.indexOf(bombNumber);
  }
  let sum = sequence.reduce((a, b) => a + b, 0);
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
