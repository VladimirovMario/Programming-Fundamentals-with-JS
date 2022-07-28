function matrix(num) {
  let result = num + ` `;
  for (let i = 0; i < num; i++) {
    console.log(result.repeat(num));
  }
}
matrix(3);

