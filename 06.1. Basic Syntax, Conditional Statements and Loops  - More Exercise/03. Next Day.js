function nextDay(year, month, day) {
  let newDate = new Date(year, month - 1, day + 1);
  let nextYear = newDate.getFullYear();
  let nextMonth = newDate.getMonth() + 1;
  let nextDay = newDate.getDate();

  console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}
nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
