function oddOccurrences(string) {
  let arr = string.toLowerCase().split(` `);

  let extracted = {};

  for (const currWord of arr) {
    if (extracted.hasOwnProperty(currWord) === false) {
      extracted[currWord] = 0;
    }
    extracted[currWord]++;
  }
  let entry = Object.entries(extracted);
  let filtered = entry.filter((x) => x[1] % 2 !== 0);
  let sorted = filtered.sort((a, b) => b[1] - a[1]);

  let result = ``;
  for (const iterator of sorted) {
    result += iterator[0] + ` `;
  }
  console.log(result);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
