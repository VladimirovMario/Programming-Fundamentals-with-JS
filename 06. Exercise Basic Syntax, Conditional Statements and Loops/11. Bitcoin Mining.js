function bitcoinMining(input) {
  let index = 0;
  let bitcoin = 11949.16;
  let gold = 67.51;
  let currentSum = 0;
  let counter = 0;
  let day = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= input.length; i++) {
    let currentMining = Number(input[index++]);

    if (i % 3 === 0) {
      currentMining *= 0.7;
      currentSum += currentMining * gold;
    } else {
      currentSum += currentMining * gold;
    }
    if (currentSum >= bitcoin) {
      while (currentSum >= bitcoin) {
        currentSum -= bitcoin;
        counter++;
        if (index < day) {
          day = index;
        }
      }
    }
  }
  console.log(`Bought bitcoins: ${counter}`);

  if (counter > 0) {
    console.log(`Day of the first purchased bitcoin: ${day}`);
  }

  console.log(`Left money: ${currentSum.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
