const program = require("commander");

program.version("1.0.0").description("Random Password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to clipboard")
  .parse();

console.log(program.opts());
