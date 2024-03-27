#! /usr/bin/env node
import inquirer from "inquirer";
const randomenumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guessed a number 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomenumber) {
    console.log("Congratulation! Your Number is Right Best Of Luck Keep it Up.");
}
else {
    console.log("Your Guessed Number is Not Correct Try Again");
}
