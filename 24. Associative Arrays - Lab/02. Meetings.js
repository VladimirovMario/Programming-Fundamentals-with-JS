function meetings(appointments) {
  let currMeeting = {};
  for (const check of appointments) {
    let [weekday, name] = check.split(` `);

    if (!currMeeting.hasOwnProperty(weekday)) {
      currMeeting[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    } else {
      console.log(`Conflict on ${weekday}!`);
    }
  }
  for (const day in currMeeting) {
    console.log(day, `->`, currMeeting[day]);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
