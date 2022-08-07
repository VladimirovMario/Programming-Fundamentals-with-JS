//https://pastebin.com/KCJmWxBh
function theLift(array) {
  let howManyPeople = Number(array[0]);
  let seats = array[1].split(` `).join(``);
  let newArray = [];
  let capacity = 0;
  let currentSeat = 0;
  let wagonCapacity = 4;

  for (let i = 0; i < seats.length; i++) {
    currentSeat = Number(seats[i]);
    if (howManyPeople < wagonCapacity && currentSeat === 0) {
      capacity = howManyPeople - currentSeat;
    } else if (howManyPeople + currentSeat < wagonCapacity) {
      capacity = howManyPeople;
    } else {
      capacity = wagonCapacity - currentSeat;
    }
    currentSeat = capacity + currentSeat;
    howManyPeople -= capacity;
    newArray.push(currentSeat);
  }

  let lift = newArray.join(` `);

  if (currentSeat === wagonCapacity && howManyPeople === 0) {
    console.log(lift);
  } else if (howManyPeople === 0) {
    console.log("The lift has empty spots!");
    console.log(lift);
  } else {
    console.log(
      "There isn't enough space! " + `${howManyPeople}` + " people in a queue!"
    );
    console.log(lift);
  }
}
theLift(["15", "1 0 2 1 1"]); //4 4 4 4 4
theLift(["15", "0 0 0 0 0"]); // The lift has empty spots! 4 4 4 3 0
theLift(["20", "0 2 0"]); //There isn't enough space! 10 people in a queue! 4 4 4
theLift(["2", "1 0 0"]);
