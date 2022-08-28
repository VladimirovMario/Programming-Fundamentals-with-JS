function travelTime(travel) {
  let collected = {};
  for (const destinations of travel) {
    let [country, town, travelCost] = destinations.split(` > `);
    travelCost = Number(travelCost);

    if (collected.hasOwnProperty(country) == false) {
      collected[country] = {};
    }
    if (collected[country].hasOwnProperty(town) == false) {
      collected[country][town] = travelCost;
    }
    if (collected[country][town] > travelCost) {
      collected[country][town] = travelCost;
    }
  }
  // console.log(collected);
  let sortedCountries = Object.keys(collected).sort((a, b) =>
    a.localeCompare(b)
  );

  for (const country of sortedCountries) {
    let sortedByCost = Object.entries(collected[country]);
    sortedByCost.sort((a, b) => a[1] - b[1]);

    let result = [];
    for (const city of sortedByCost) {
      result.push(city.join(` -> `));
    }
    console.log(`${country} -> ${result.join(` `)}`);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
console.log(`---`);
travelTime([
  "Bulgaria > Sofia > 25300",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
