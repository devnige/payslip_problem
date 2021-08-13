//FIrst attempt
// The payslip problem!
// Desk check
// Take user inputs
// Calculate some things
// Give an output to console

// Enter name - string
// Enter surname - string
// Enter annual salary
// Logic is
// If annual salary is < $18,201 no tax
// If annual salary is >= $18,201 and < $37,001 then tax is (salary - $18,200)*0.19
// If annual salary is >= $37,001 and < $87,000 then tax is ($X + (salary - $)

console.log("Welcome to devnige's Payslip Generator")

const prompt = require('prompt');

prompt.start();

prompt.get(['name', 'surname', 'annual salary', 'super rate', 'payment start date', 'payment end date'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('  Command-line input received:');
    console.log('  Name: ' + result.name);
    console.log('  Surname: ' + result.surname);
    console.log('  Annual salary: ' + result.salary);
    console.log('  Super rate: ' + result.superRate);
    console.log('  Payment start date: ' + result.startDate);
    console.log('  Payment end date: ' + result.endDate);
});

// Doesn't seem to like non-alphabetic characters?


