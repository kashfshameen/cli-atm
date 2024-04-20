#! /usr/bin/env node
import inquirer from "inquirer";
const pin: number = 86867;
let balance: number = 10000;

const userPin = await inquirer.prompt([
  { message: "Enter your pin", type: "number", name: "userpin" },
]);
if (pin === userPin.userpin) {
  console.log("your pin is correct");
  const operationAns = await inquirer.prompt([
    {
      message: "please select option",
      type: "list",
      name: "operation",
      choices: ["check Balance", "withdraw"],
    },
  ]);
if(operationAns.operation === "check Balance"){
    console.log(`your Balance is ${balance}`);
}
else if(operationAns.operation ==="withdraw"){
   const amountans= await inquirer.prompt([{name:"amount",message:"enter your amount",type:"number"}]);
  if(balance >= amountans.amount){
   balance-=amountans.amount;
   console.log("your remaining balance is " + balance);
  }
  else{
    console.log("your balance in insufficent")
  }
}





} else {
  console.log("you pin incorrect please enter correct pin");
}
