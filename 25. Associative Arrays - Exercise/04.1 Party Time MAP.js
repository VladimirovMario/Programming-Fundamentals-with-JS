function partyTime(input) {
    let guestLists = new Map();
    guestLists.set("regular", []);
    guestLists.set("vip", []);
    let guest = input.shift();
  
    while (guest !== "PARTY") {

      let digit = Number(guest[0]);
      
      if (digit) {
        guestLists.get("vip").push(guest);
      } else {
        guestLists.get("regular").push(guest);
      }
      guest = input.shift();
    }
    for (let line of input) {
      let digit = Number(line[0]);
      
      if (digit) {
        let index = guestLists.get("vip").indexOf(line);
        guestLists.get("vip").splice(index, 1);
      } else {
        let index = guestLists.get("regular").indexOf(line);
        guestLists.get("regular").splice(index, 1);
      }
    }
    let length = guestLists.get("vip").length + guestLists.get("regular").length;
    console.log(length);
    guestLists.get("vip").forEach((el) => console.log(el));
    guestLists.get("regular").forEach((el) => console.log(el));
  }
  partyTime([
    "IK9Yo0h",
    "NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "7IK9Yo0h",
    "9NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "6tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "6tSzE5t0p",
  ]);
  