function dayOfWeek(day) {
  if (day < 1 || day > 7) {
    console.log(`Invalid day!`);
  } else {
    const dayOfWeek = [
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
      `Sunday`,
    ];
    console.log(dayOfWeek[day - 1]);
  }
}
dayOfWeek(1);
dayOfWeek(6);
dayOfWeek(0);
