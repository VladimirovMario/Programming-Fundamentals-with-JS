function softUniReception(array) {
  firstEmploye = Number(array[0]);
  secondEmploye = Number(array[1]);
  thirdEmploye = Number(array[2]);
  studentsNum = Number(array[3]);

  let sumOfEmpl = firstEmploye + secondEmploye + thirdEmploye;
  let count = 0;

  while (studentsNum > 0) {
    count++;
    if (count % 4 !== 0) {
      studentsNum -= sumOfEmpl;
    }
  }
  console.log(`Time needed: ${count}h.`);
}
softUniReception(["5", "6", "4", "20"]);
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40'])