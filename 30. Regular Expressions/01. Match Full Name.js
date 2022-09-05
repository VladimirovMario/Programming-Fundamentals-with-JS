function matchFullName(names) {
  let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;
  let validName = pattern.exec(names);

  let validNames = [];
  while (validName !== null) {
    validNames.push(validName[0]);

    validName = pattern.exec(names);
  }
  console.log(validNames.join(` `));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
