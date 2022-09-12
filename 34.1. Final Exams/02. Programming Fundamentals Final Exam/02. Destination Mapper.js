function destinationMapper(text) {
  let pattern = /(=|\/)(?<places>[A-Z][A-Za-z]{2,})\1/gm;

  let destination = pattern.exec(text);

  let result = [];
  let travelPoints = 0;

  while (destination !== null) {
    result.push(destination.groups.places);
    travelPoints += destination.groups.places.length;

    destination = pattern.exec(text);
  }

  console.log(`Destinations: ${result.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper(`ThisIs some InvalidInput`);
