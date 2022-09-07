function starEnigma(input) {
    let attacked = [];
    let destroyed = [];
    let numberOfMessages = input.shift();
  
    for (let i = 0; i < numberOfMessages; i++) {
        let message = input[i].toLowerCase();
        let result = message.match(/[star]/g);
        let newMessage = input[i]; //here
        if (result !== null) {     //here
            newMessage = input[i].split("").map(e => e.charCodeAt(0) - result.length).map(a => String.fromCharCode(a)).join(""); 
        }                          //here
        let regex = /@(?<name>[A-Z][a-z]+)[^@!\->:]*:(?<population>\d+)[^@!\->]*!(?<attack>[A|D])![^@!\->:]*->(?<solidercount>\d+)/g;
        let matching = regex.exec(newMessage);
  
        if (matching !== null) {
            if (matching.groups.attack === "D") {
                destroyed.push(matching.groups.name)
            } else if (matching.groups.attack === "A")
                attacked.push(matching.groups.name)
        }
  
    }
  
  
    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length > 0) {
        let sorted = attacked.sort((a, b) => a.localeCompare(b))
        sorted.forEach(element => console.log(`-> ${element}`))
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    if (destroyed.length > 0) {
        let secondSorted = destroyed.sort((a, b) => a.localeCompare(b))
        secondSorted.forEach(element => console.log(`-> ${element}`))
    }
  
  }
  starEnigma(["2", 'STCDoghudd4=63333$D$0A53333', "EHfsytsnhf?8555&I&2C9555SR"]);