function city(city) {

  // for (const [key, value] of Object.entries(city)) {
  //   console.log(`${key} -> ${value}`);
  // }
  for (let key of Object.keys(city)) {
    console.log(`${key} -> ${city[key]}`);
  }
}
city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
console.log(`-----`);
city({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
