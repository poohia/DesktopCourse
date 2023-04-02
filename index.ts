import { Command } from "commander";
import chalk from "chalk";

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const program = new Command();

program.name("calculator").description("Calculator").version("1.0.0");

program
  .description("Exe for calculator")
  .option("-hl, --hello-world", "show hello world")
  .action((argv) => {
    console.log(argv);
    if (argv.helloWorld) {
      console.log(chalk.blue("Hello world!"));
      rl.close();
    } else {
      rl.question("What do you think of Node.js? ", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.close();
      });
    }
  });

program.parse();
