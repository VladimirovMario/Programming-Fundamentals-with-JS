function monthPrinter(num) {
  if (num < 1 || num > 12) {
    console.log(`Error!`);
  } else {
    let month = ``;
    switch (num) {
      case 1:
        month = `January`;
        break;
      case 2:
        month = `February`;
        break;
      case 3:
        month = `March`;
        break;
      case 4:
        month = `April`;
        break;
      case 5:
        month = `May`;
        break;
      case 6:
        month = `June`;
        break;
      case 7:
        month = `July`;
        break;
      case 8:
        month = `August`;
        break;
      case 9:
        month = `September`;
        break;
      case 10:
        month = `October`;
        break;
      case 11:
        month = `November`;
        break;
      case 12:
        month = `December`;
        break;
    }
    console.log(month);
  }
}
monthPrinter(2);
monthPrinter(3);
monthPrinter(12);
monthPrinter(-1);
monthPrinter(1);
