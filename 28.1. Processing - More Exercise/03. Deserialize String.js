function deserializeString(array) {
  let result = [];
  let index = 0;
  let command = array[index++];
  let count = 0;

  while (command !== "end") {
    let tokens = command.split(`:`);
    tokens[1].split(`/`).forEach((element) => result.push(element));

    command = array[index++];
    count++;
  }

  for (let i = 0; i < count; i++) {
    let tokens = array.shift().split(`:`);
    let index = tokens[1].split(`/`).map(Number);

    for (let j = 0; j < index.length; j++) {
      result.splice(index[j], 1, tokens[0]);
    }
  }
  console.log(result.join(``));
}
deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
console.log(`---`);
deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
