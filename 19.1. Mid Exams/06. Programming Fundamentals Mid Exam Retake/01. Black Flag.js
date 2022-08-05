function blackFlag(array) {
  let days = +array[0];
  let dailyPlunder = +array[1];
  let expectedPlunder = parseFloat(array[2]);

  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += dailyPlunder;
    if (i % 3 == 0) {
      totalPlunder += dailyPlunder * 0.5;
    }
    if (i % 5 == 0) {
      totalPlunder *= 0.7;
    }
  }
  let percentage = (totalPlunder / expectedPlunder) * 100;

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
console.log(`---`);
blackFlag(["10", "20", "380"]);
