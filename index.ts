#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";

async function welcome() {
  let rainbowTitle = chalkAnimations.karaoke("Number Guessing game");
}
welcome();

const randomNumber = Math.floor(Math.random() * 6 + 1);

const asnwers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: chalk.blueBright("please guess a number between 1 to 6"),
  },
]);
if (asnwers.userGuessNumber === randomNumber) {
  console.log(chalk.blue("Congratulation you guess a number"));
} else {
  console.log(chalk.red("sorry wrong guess"));
}
