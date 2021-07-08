const program = require("commander");
const log = console.log();

program.version("1.0.0").description("Random Password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "create password without numbers")
  .option("-ns, --no-symbols", "create password without symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Output generated password
log(generatedPassword);
