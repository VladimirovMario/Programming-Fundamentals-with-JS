function encryptingPassword(input) {
  let n = input.shift();
  let pattern =
    /^(.+?)>(?<num>\d{3})\|(?<lower>[a-z]{3})\|(?<up>[A-Z]{3})\|(?<symbol>[^<>]{3})<\1$/g;

  for (let i = 0; i < n; i++) {
    let line = input[i];
    let match = pattern.exec(line);

    if (match != null) {
      let numbers = match.groups["num"];
      let lower = match.groups["lower"];
      let up = match.groups["up"];
      let symbol = match.groups["symbol"];

      let pass = numbers + lower + up + symbol;
      console.log(`Password: ${pass}`);
    } else {
      console.log(`Try another password!`);
    }
    match = pattern.exec(line);
  }
}
encryptingPassword([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);

encryptingPassword([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
