function aMinerTask(resources) {
  let collected = {};
  let length = resources.length;

  for (let i = 0; i < length; i += 2) {
    let currResource = resources[i];
    let quantity = +resources[i + 1];

    if (collected.hasOwnProperty(currResource) == false) {
      collected[currResource] = 0;
    }
    collected[currResource] += quantity;
  }
  for (const resource in collected) {
    console.log(resource, `->`, collected[resource]);
  }
}
aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
console.log(`---`);
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
