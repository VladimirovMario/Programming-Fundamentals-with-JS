function followers(facebookOfJane) {
  let record = {};
  while (facebookOfJane[0] != "Log out") {
    let [command, userName, count] = facebookOfJane.shift().split(`: `);
    count = +count;

    if (command == "New follower") {
      if (record.hasOwnProperty(userName) == false) {
        record[userName] = { likes: 0, comments: 0 };
      }
    }
    if (command == "Like") {
      if (record.hasOwnProperty(userName) == false) {
        record[userName] = { likes: count, comments: 0 };
      } else {
        record[userName].likes += count;
      }
    }
    if (command == "Comment") {
      if (record.hasOwnProperty(userName) == false) {
        record[userName] = { likes: 0, comments: 1 };
      } else {
        record[userName].comments++;
      }
    }
    if (command == "Blocked") {
      if (record.hasOwnProperty(userName) == false) {
        console.log(`${userName}` + ` ` + "doesn't exist.");
      }
      delete record[userName];
    }
  }
  // console.log(record);

  let count = Object.keys(record).length;
  console.log(`${count} followers`);

  for (let currUser in record) {
    let sum = record[currUser].likes + record[currUser].comments;

    console.log(`${currUser}: ${sum}`);
  }
}

followers([
  "New follower: George",
  "Like: George: 5",
  "New follower: George",
  "Log out",
]);

console.log(`---`);

followers([
  "Like: Katy: 3",
  "Comment: Katy",
  "New follower: Bob",
  "Blocked: Bob",
  "New follower: Amy",
  "Like: Amy: 4",
  "Log out",
]);

console.log(`---`);

followers([
  "Blocked: Amy",
  "Comment: Amy",
  "New follower: Amy",
  "Like: Tom: 5",
  "Like: Ellie: 5",
  "Log out",
]);
