function storeProvision(stocksInStore, order) {
  let provisions = {};

  for (let index = 0; index < stocksInStore.length; index += 2) {
    provisions[stocksInStore[index]] = Number(stocksInStore[index + 1]);
  }

  for (let j = 0; j < order.length; j += 2) {
    if (provisions.hasOwnProperty(order[j])) {
      // let curr = order[j]
      provisions[order[j]] += Number(order[j + 1]);
    } else {
      provisions[order[j]] = Number(order[j + 1]);
    }
  }

  for (const key in provisions) {
    console.log(`${key} -> ${provisions[key]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
console.log(`-------`);
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
