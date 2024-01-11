/*import inquirer from "inquirer";

interface UserInput {
    userId : string,
    userPin : number,
    accountType : string,
    transacationType : string,
    account : number,
}

const UserInput: UserInput = await inquirer.prompt([
{
    type:"input",
    name : "userId",
    message : "Enter User Id"
},
{
    type :"number",
    name : "userPin",
    message : "Enter your Pin",
},
{
    
    type :"list",
    name : "accountType",
    choice: ["Current", "Saving"],
    message:"Select Your Account Type"
},
{
    type:"list",
    name: "transactionType",
    choice :["fast Cash", "Cash Withdraw" ,"Balance Inquiry"],
    message : "select your transaction"
},
{
    type :"number",
    name: "amount",
    massage : "Enter amount you want to withdraw ",
    when(UserInput) {
     return UserInput.transactionType === "Cash Withdraw"
    },
        
    
    
},
  {

   type : "list",
   name : "amount",
   choices : [1000 , 2000 , 3000, 5000,25000],
   message : " select  amount you want to withdraw",
   when(userId){
    return userId . transactionType === "Fast Cash"
   }
  }

]);*/
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter User Id",
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Cash Withdraw", "Balance Inquiry"],
        message: "Select your transaction",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter amount you want to withdraw",
        when: (answers) => answers.transactionType === "Cash Withdraw",
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 5000, 25000],
        message: "Select amount you want to withdraw",
        when: (answers) => answers.transactionType === "Fast Cash",
    },
]);
console.log(userInput); // You can print the userInput object to see the result
