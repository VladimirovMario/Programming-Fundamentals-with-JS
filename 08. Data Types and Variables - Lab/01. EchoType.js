function echoType(params) {
  if (typeof params == `string` || typeof params === `number`) {
    console.log(typeof params);
    console.log(params);
  } else {
    console.log(typeof params);
    console.log(`Parameter is not suitable for printing`);
  }
}
echoType("Hello, JavaScript!");
echoType(18);
echoType(null);
