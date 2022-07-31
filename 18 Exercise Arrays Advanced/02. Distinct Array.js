function distinctArray(array) {
  //!!!
  // let newArray = [];
  // for (const iterator of array) {
  //   if (!newArray.includes(iterator)) {
  //     newArray.push(iterator);
  //   }
  // }
  // console.log(newArray.join(` `));
  // }

  let newArray = array.slice(0);
  for (let index = 0; index < newArray.length; index++) {
    let element = newArray[index];
    for (let j = index + 1; j < newArray.length; j++) {
      let nextElement = newArray[j];
      if (element === nextElement) {
        newArray.splice(j, 1);
        j = j - 1;
      }
    }
  }
  console.log(newArray.join(` `));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
