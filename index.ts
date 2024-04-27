#! /usr/bin/env node
console.log("By Sir Nasir")
import inquirer from "inquirer";

const Num = await inquirer.prompt([
  { message: "Enter 1st Number", type: "number", name: "first" },
  { message: "Enter 2nd Number", type: "number", name: "second" },
  {
    message: "Select the operation to perform action",
    name: "operation",
    type: "list",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

if (Num.operation==="Addition"){
   console.log(`The answer of sum is : ${Num.first+Num.second}`);
}
else if (Num.operation==="Substraction"){
  console.log(`The answer of Substraction is : ${Num.first-Num.second}`);
}
else if (Num.operation==="Multiplication"){
  console.log(`The answer of product is : ${Num.first*Num.second}`);
}
else if (Num.operation==="Division"){
  console.log(`The answer of Division is : ${Num.first/Num.second}`);
}