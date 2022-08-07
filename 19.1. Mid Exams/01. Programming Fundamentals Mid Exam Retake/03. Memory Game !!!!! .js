function memoryGame(array) { // 83 от сто 
  let sequence = array.shift().split(` `);
  let countTurns = 0;

  while (array[0] /*ако го изплозвам така*/!== "end") {
    // трябва полсе да използвам shift()
    let tokens = array.shift().split(` `);
    let firstNum = Number(tokens[0]);
    let secondNum = Number(tokens[1]);

    countTurns++;
    if (sequence[firstNum] === sequence[secondNum]) {
      let smaller = Math.min(firstNum, secondNum);
      let bigger = Math.max(firstNum, secondNum);
      let removeFirstEl = sequence.splice(bigger, 1);
      sequence.splice(smaller, 1);

      console.log(
        `Congrats! You have found matching elements - ${removeFirstEl}!`
      );
    } else if (
      firstNum < 0 ||
      firstNum >= sequence.length ||
      (firstNum === secondNum && secondNum <= 0) ||
      secondNum >= sequence.length ||
      firstNum === secondNum
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      sequence.splice(
        sequence.length / 2,
        0,
        `-${countTurns}a`,
        `-${countTurns}a`
      );
    } else {
      console.log("Try again!");
    }
    if (sequence.length === 0) {
      console.log(`You have won in ${countTurns} turns!`);
      break;
    }
  }
  if (sequence.length > 0) {
    console.log("Sorry you lose :(");
    console.log(`${sequence.join(` `)}`);
  }
}
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
