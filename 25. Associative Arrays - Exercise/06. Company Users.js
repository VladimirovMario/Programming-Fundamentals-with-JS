function companyUsers(array) {
  let companies = {};
  for (const currCompany of array) {
    let [name, employee] = currCompany.split(` -> `);

    if (companies.hasOwnProperty(name) == false) {
      companies[name] = [];
    }

    if (companies[name].includes(employee) == false) {
      companies[name].push(employee);
    }
  }
  let sorted = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [company, employees] of sorted) {
    console.log(company);
    for (const employee of employees) {
      console.log(`-- ${employee}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log(`---`);
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
