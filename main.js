import {finances} from "./financial_data.js"
var inputData = finances

// The total number of months included in the dataset
var netMonthsInData = 0

for (var i = 0; i < inputData.length; i++) {
    netMonthsInData++
}
console.log("Net months in data = " + netMonthsInData)

///////////////////////////////////////////////////////////////

// The net total amount of profit/losses over the entire period
var netProfitOrLoss = 0

for (var i = 0; i < inputData.length; i++) {
    netProfitOrLoss = netProfitOrLoss + inputData[i][1]
}
console.log("Net profit ot loss = " + netProfitOrLoss)

///////////////////////////////////////////////////////////////

// The average of the changes in profit/losses over the entire period
var avgMonthlyChange = 0

for (var i = 0; i < inputData.length-1; i++) {
    avgMonthlyChange = avgMonthlyChange + (inputData[i+1][1] - inputData[i][1])
}
console.log("sum of months changes = " + avgMonthlyChange)

avgMonthlyChange = avgMonthlyChange / netMonthsInData

console.log(avgMonthlyChange)
// round up data

///////////////////////////////////////////////////////////////

// Greatest increase in profits




