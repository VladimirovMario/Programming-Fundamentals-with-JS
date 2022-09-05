function matchDates(params) {
  let pattern =
    /\b(?<day>\d{2})(\.|-|\/)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gi;

  let validDates = pattern.exec(params);

  while (validDates !== null) {
    let day = validDates.groups[`day`];
    let month = validDates.groups[`month`];
    let year = validDates.groups[`year`]
    validDates = pattern.exec(params);
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
matchDates(
  "13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016"
);
