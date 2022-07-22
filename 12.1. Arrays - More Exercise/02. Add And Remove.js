function addAndRemove(arr) {
  const length = arr.length;
  let newArray = [];

  for (let i = 0; i < length; i++) {
    if (arr[i] === "add") {
      newArray.push(i + 1);
    } else {
      newArray.pop();
    }
  }
  if (newArray.length === 0) {
    console.log(`Empty`);
  } else {
    console.log(newArray.join(` `));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]); //1 4 5
addAndRemove(["remove", "remove", "remove"]);
