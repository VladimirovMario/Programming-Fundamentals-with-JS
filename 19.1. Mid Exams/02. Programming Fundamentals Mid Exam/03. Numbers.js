function numbers(string) {
  let array = string.split(` `).map(Number);

  let sum = 0;
  let count = 0;
  
  for (const iterator of array) {
    sum += iterator;
    count++;
  }

  let average = sum / count;
  let sorted = array.sort((a, b) => b - a);
  let filtered = sorted.filter((x, index) => x > average && index < 5);

  if (filtered.length === 0) {
    console.log(`No`);
  } else {
    console.log(filtered.join(` `));
  }
}
numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1", `1`);
numbers("-1 -2 -3 -4 -5 -6");
