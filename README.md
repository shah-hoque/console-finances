# console-finances

Last updated on: 2nd Jan 2023. Last updated by: Shohidul Shah Hoque
__________

## Description
This application is deployed where the results can be found via the Chrome Inspect tool under "Console"
- https://shah-hoque.github.io/console-finances

It reports key data based on information located in an 2d array data structure.

The following list is the information this application intends to extract:
- The total number of months included in the dataset
- The net total amount of profit/losses over the entire period
- The average of the changes in profit/losses over the entire period
- The greatest increase in profits (date and amount) over the entire period
- The greatest decrease in losses (date and amount) over the entire period

## Installation
The application comes with an example data set within a 2d array data structure, however if this example array is to be updated with a new set of data, then the user should conduct the instructions below:
- Add 'export' at the beginning of the variable to the new array in question. This new file needs to be located within this same directory
- Update the first 2 lines in "main.js" by changing the import argument to the variable of the new array in question and by correcting the file path if needed
- Within "main.js" change the assignment of 'inputData' to the variable of the new array in question


## Usage
The application can only be used with a data set organised within a 2d array data structure with the first inner element including a date and the second inner element including an integer.

**An example image of the report when printed**

![image example of report when printed](/assets/Image%20example.png)

## Credits
Author: Shohidul Shah Hoque