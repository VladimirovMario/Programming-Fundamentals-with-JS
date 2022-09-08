//  text => text.match(/(?<!\S)[A-Za-z]+(\.|-|_)?[A-Za-z]+@[A-Z-a-z]+\.[A-Z-a-z]+(\.[A-Z-a-z]*\.?)?\b/g).join(`\n`)

function extractEmails(text) {
  console.log(
    (test = text
      .match(
        /(?<!\S)[A-Za-z0-9]+(\.|-|_)?[A-Za-z0-9]+@[A-Z-a-z]+\.[A-Z-a-z]+(\.[A-Z-a-z]*\.?)?\b/g
      )
      .join(`\n`))
  );
}
extractEmails(`Please contact us at: support@github.com.`);
extractEmails(
  `Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`
);
extractEmails(
  `Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.`
);
