#! /usr/ bin / env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 5 + 1);
var answer = await inquirer.prompt([
    { message: "Enter your number",
        type: "number",
        name: "userinputnumber",
    }
]);
if (answer.userinputnumber === randomnumber) {
    console.log("your answer is true");
}
else {
    console.log("Your Answer is Wrong");
}
;
