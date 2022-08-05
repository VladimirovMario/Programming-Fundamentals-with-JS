function bonusScoringSystem(array) {
  let numberStudents = Number(array.shift());
  let numberLectures = Number(array.shift());
  let additionalBonus = Number(array.shift());

  let maxBonus = 0;
  let maxAttended = 0;

  for (let index = 0; index < numberStudents; index++) {
    let currentAttendances = Number(array[index]);
    let totalBonus =
      (currentAttendances / numberLectures) * (5 + additionalBonus);
    if (totalBonus >= maxBonus) {
      maxBonus = totalBonus;
      maxAttended = currentAttendances;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttended} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
