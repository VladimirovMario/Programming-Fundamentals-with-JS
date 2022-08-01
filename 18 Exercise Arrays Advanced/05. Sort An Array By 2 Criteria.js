function sortAnArrayBy2Criteria(array) {
  array = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
  for (const iterator of array) {
    console.log(iterator);
  }
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
console.log(`----`);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
