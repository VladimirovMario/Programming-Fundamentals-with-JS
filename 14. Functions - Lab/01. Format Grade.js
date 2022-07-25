function formatGrade(num) {
  let comment = ``;
  let grade = num.toFixed(2);

  if (grade < 3) {
    comment = `Fail`;
    grade = 2;
  } else if (grade < 3.5) {
    comment = `Poor`;
  } else if (grade < 4.5) {
    comment = `Good`;
  } else if (grade < 5.5) {
    comment = `Very Good`;
  } else {
    comment = `Excellent`;
  }
  console.log(`${comment} (${grade})`);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
