
// 1. Store application data
let budget = 0;
let expenses = 0;

// 2. Collect user input
budget = Number(prompt("Enter your monthly budget:"));
expenses = Number(prompt("Enter your total expenses:"));

// 3. Create a function to calculate balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 4. Calculate remaining balance
let remainingBalance = calculateBalance(budget, expenses);

// 5. Display results in the console
console.log("----- SpendWise Budget Summary -----");
console.log("Monthly Budget: KSh " + budget);
console.log("Total Expenses: KSh " + expenses);
console.log("Remaining Balance: KSh " + remainingBalance);
