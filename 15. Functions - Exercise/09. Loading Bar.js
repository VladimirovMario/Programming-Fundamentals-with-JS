function loadingBar(num) {
  let percent = `%`.repeat(num / 10);
  let dots = `.`.repeat(10 - num / 10);

  function isLoaded(num) {
    return num / 100 === 1 ? true : false;
  }

  if (isLoaded(num)) {
    console.log(`${num}% Complete!`);
    console.log(`[` + percent + `]`);
  } else {
    console.log(`${num}%` + ` [` + percent + dots + `]`);
    console.log("Still loading...");
  }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
