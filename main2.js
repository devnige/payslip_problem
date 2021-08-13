// The payslip problem!
// Desk check
// Take user inputs
// Calculate some things
// Give an output to console

// data required:
// name - string
// surname - string
// annual salary - string which needs to be an integer
// super rate - string which needs to be an integer
// payment start date - string which can stay as an integer
// payment end date - string which can stay as an integer

// Calculations:
// Pay period is payment end date - start date
// Pay period could be more than 1 month?
// Gross monthly income is annual salary / length of pay period
// Income tax needs some conditionals based around annual salary 

// import grossIncome from 'taxengine.js';
// import superAmt from 'taxengine.js';
// import taxOwed from 'taxengine.js';
// import netIncome from 'taxengine.js';

// Use prompt-sync for node inputs

// Inputs
const prompt = require('prompt-sync')({sigint: true});

const name = prompt('Please input your name: ');
const surname = prompt('Please input your surname: ');
const annualSalaryStr = prompt('Please input your annual salary: ');
const superRateStr = prompt('Please input your super rate: ');
const dStartStr = prompt('Please input your payment start date: ');
const dEndStr = prompt('Please input your payment end date: ');

// Parsing date inputs to months
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const month

const dStart = new Date(dStartStr); //converts the string to a date object
const dEnd = new Date(dEndStr);

//get the value of start month
const mStart = dStart.getMonth();

//get the value of start month
const mEnd = dEnd.getMonth();

const dateStart = dStart.getDate(); //get the value of the start date
const dateEnd = dEnd.getDate();

// Exports
module.exports.annualSalaryStr = annualSalaryStr;
module.exports.superRateStr = superRateStr;
module.exports.mStart = mStart;
module.exports.mEnd = mEnd;


// Output to console
const t = require('./taxengine');

console.log(
'Your payslip has been generated: \n',
'Name: ', name, surname, '\n','Pay Period: ', dateStart, monthNames[mStart],' - ',dateEnd, monthNames[mEnd], '\n','Gross income: ',t.grossIncome, '\n',
'Income Tax: ',t.taxOwed,'\n','Net Income: ',t.netIncome, '\n','Super: ', t.superAmt
);
