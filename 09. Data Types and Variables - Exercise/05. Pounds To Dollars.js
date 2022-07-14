function poundsToDollars(pounds) {
  const rate = 1.31;
  const dollars = pounds * rate;
  console.log(dollars.toFixed(3));
}
poundsToDollars(80);
poundsToDollars(39);
