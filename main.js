// INSTRUCTIONS IF YOU WANT TO USE ANOTHER DATA SET
// 1) Add 'export' at the beginning of the variable that includes the array in question. This file needs to be located within this same directory
// 2) Update the 2 lines below by changing the import arg to the variable of the array in question and by correcting the file path if needed
// 3) Change the assignment of 'inputData' to the variable of the array in question

import {finances} from "./financial_data.js"
var inputData = finances

///////////////////////////////////////////////////////////////

// The total number of months included in the dataset
var netMonthsInData = 0

for (var i = 0; i < inputData.length; i++) {
    netMonthsInData++
}

///////////////////////////////////////////////////////////////

// The net total amount of profit/losses over the entire period
var netProfitOrLoss = 0

for (var i = 0; i < inputData.length; i++) {
    netProfitOrLoss = netProfitOrLoss + inputData[i][1]
}

///////////////////////////////////////////////////////////////

// The average of the changes in profit/losses over the entire period
var avgMonthlyChange = 0

for (var i = 0; i < inputData.length-1; i++) {
    avgMonthlyChange = avgMonthlyChange + (inputData[i+1][1] - inputData[i][1])
}
avgMonthlyChange = avgMonthlyChange / netMonthsInData

///////////////////////////////////////////////////////////////

// Greatest increase in profits & greatest decrease in profits

var avgMonthlyChangeAsArray = []
var listOfMonths = []


for (var i = 0; i < inputData.length-1; i++) {
    avgMonthlyChangeAsArray.push(inputData[i+1][1] - inputData[i][1]);
    listOfMonths.push(inputData[i+1][0])
}

var TopIncreaseInProfit = Math.max(...avgMonthlyChangeAsArray);
var TopDecreaseInProfit = Math.min(...avgMonthlyChangeAsArray);

var maxIndex = avgMonthlyChangeAsArray.indexOf(TopIncreaseInProfit)
var minIndex = avgMonthlyChangeAsArray.indexOf(TopDecreaseInProfit)


/////////////////////////////////////////////////////////////

// Print out report
console.log("Financial Analysis")
console.log("----------------------------")
console.log("Total Months: " + netMonthsInData)
console.log("Total: " + "$" + netProfitOrLoss)
console.log("Greatest Increase in Profits: " + listOfMonths[maxIndex] + " " + "($" + TopIncreaseInProfit + ")" )
console.log("Greatest Decrease in Profits: " + listOfMonths[minIndex] + " " + "($" + TopDecreaseInProfit + ")" )



