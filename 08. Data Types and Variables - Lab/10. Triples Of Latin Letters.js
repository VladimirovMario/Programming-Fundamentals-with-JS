function triplesOfLatinLetters(n) {
  let num = Number(n);
  for (let i = `a`.charCodeAt(); i < `a`.charCodeAt() + num; i++) {
    let ch1 = String.fromCharCode(i);
    for (let j = `a`.charCodeAt(); j < `a`.charCodeAt() + num; j++) {
      let ch2 = String.fromCharCode(j);
      for (let k = `a`.charCodeAt(); k < `a`.charCodeAt() + num; k++) {
        let ch3 = String.fromCharCode(k);
        console.log(`${ch1}${ch2}${ch3}`);
      }
    }
  }
}
triplesOfLatinLetters(`2`);
