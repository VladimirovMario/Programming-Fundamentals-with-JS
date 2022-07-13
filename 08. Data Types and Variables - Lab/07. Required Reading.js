function requiredReading(numOfPages, pageForHour, numOfDays) {
  const totalTime = numOfPages / pageForHour;
  const hoursPerDay = totalTime / numOfDays;
  console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
