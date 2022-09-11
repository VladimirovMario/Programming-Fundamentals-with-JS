function adAstra(list) {
  let pattern = /(\||#)([a-zA-Z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

  let food = pattern.exec(list);
  let sumCalories = 0;

  let result = [];
  while (food !== null) {
    let name = food[2];
    let date = food[3];
    let calories = Number(food[4]);

    sumCalories += calories;

    result.push({ name, date, calories });

    food = pattern.exec(list);
  }

  let numOfDays = Math.floor(sumCalories / 2000);

  console.log(`You have food to last you for: ${numOfDays} days!`);
  for (let currItem of result) {
    console.log(
      `Item: ${currItem.name}, Best before: ${currItem.date}, Nutrition: ${currItem.calories}`
    );
  }
}
adAstra(
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|"
);
console.log(`---`);
adAstra(
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|"
);
console.log(`---`);

adAstra("Hello|#Invalid food#19/03/20#450#$5*(@");
