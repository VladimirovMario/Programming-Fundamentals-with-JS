function vacation(groupNum, groupType, day) {
  let price = 0;
  if (day === `Friday`) {
    switch (groupType) {
      case `Students`:
        price = 8.45;
        break;
      case `Business`:
        price = 10.9;
        break;
      case `Regular`:
        price = 15.0;
        break;
    }
  } else if (day === `Saturday`) {
    switch (groupType) {
      case `Students`:
        price = 9.8;
        break;
      case `Business`:
        price = 15.6;
        break;
      case `Regular`:
        price = 20.0;
        break;
    }
  } else if (day === `Sunday`) {
    switch (groupType) {
      case `Students`:
        price = 10.46;
        break;
      case `Business`:
        price = 16.0;
        break;
      case `Regular`:
        price = 22.5;
        break;
    }
  }
  let totalPrice = price * groupNum;
  if (groupType === `Students` && groupNum >= 30) {
    totalPrice *= 0.85;
  } else if (groupType === `Business` && groupNum >= 100) {
    totalPrice = price * (groupNum - 10);
  } else if (groupType === `Regular` && groupNum >= 10 && groupNum <= 20) {
    totalPrice *= 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
// vacation(30, "Students", "Sunday")
vacation(100, "Business", "Sunday");
vacation(40, "Regular", "Saturday");
