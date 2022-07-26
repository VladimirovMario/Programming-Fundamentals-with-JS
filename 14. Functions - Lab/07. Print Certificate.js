function printCertificate(grade, name) {
    
  if (pass(grade)) {
    printHeader();
    printName(name);
    formatGrade(grade);
  } else {
    console.log(`${name[0]} ${name[1]} does not qualify`);
  }

  function pass(grade) {
    return grade >= 3;
  }

  function printHeader() {
    console.log("~~~-   {@}   -~~~");
    console.log("~- Certificate -~");
    console.log("~~~-  ~---~  -~~~");
  }

  function printName(nameArray) {
    console.log(`${nameArray[0]} ${nameArray[1]}`);
  }

  function formatGrade(num) {
    let comment = ``;
    let grade = num.toFixed(2);

    if (grade < 3) {
      comment = `Fail`;
      grade = 2;
    } else if (grade < 3.5) {
      comment = `Poor`;
    } else if (grade < 4.5) {
      comment = `Good`;
    } else if (grade < 5.5) {
      comment = `Very Good`;
    } else {
      comment = `Excellent`;
    }
    console.log(`${comment} (${grade})`);
  }
}
printCertificate(5.33, ["John", "Smith"]);
console.log(`----`);
printCertificate(2.33, ["John", "Wick"]);
