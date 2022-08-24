function schoolGrades(school) {
  let student = new Map();
  for (const currStudent of school) {
    let tokens = currStudent.split(` `);
    let names = tokens.shift();//
    let grades = tokens.map(Number);

    if (!student.has(names)) {
      student.set(names, []);//
    }

    let existing = student.get(names);//
    for (let grade of grades) {
      existing.push(grade);//
    }
  }
  let sorted = Array.from(student);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  // console.log(sorted);
  for (let [name, grades] of sorted) {
    let average = 0;
    for (let grade of grades) {
      average += grade;
    }
    average /= grades.length;
    console.log(`${name}: ${average.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log(`---`);
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
