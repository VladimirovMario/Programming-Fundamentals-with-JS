function theatrePromotions(typeOfDay, age) {
  if (age < 0 || age > 122) {
    console.log(`Error!`);
  } else {
    let price = 0;
    switch (typeOfDay) {
      case `Weekday`:
        price = 12;
        if (age > 18 && age <= 64) {
          price = 18;
        }
        break;
      case `Weekend`:
        price = 15;
        if (age > 18 && age <= 64) {
          price = 20;
        }
        break;
      case `Holiday`:
        if (age <= 18) {
          price = 5;
        } else if (age <= 64) {
          price = 12;
        } else {
          price = 10;
        }
        break;
    }
    console.log(price + `$`);
  }
}
theatrePromotions("Holiday", -12);
theatrePromotions("Weekday", 42);
theatrePromotions("Weekday", 10);
theatrePromotions("Holiday", 12);
theatrePromotions("Holiday", 19);
theatrePromotions("Holiday", 100);
