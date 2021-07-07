const program = require("commander");

program.version("1.0.0").description("Random Password Generator");

program
  .command("generate")
  .action(() => {
    console.log("Generated");
  })
  .parse();
