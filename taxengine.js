// Tax Engine takes inouts payment start date, payment end date, salary and super rate inputs and calculate taxes and net salary
// case 0 annual salary is < 18201 no tax
// case 1: annual salary is >= 18201 and < 37001 then tax is ((salary - $18,200)*0.19)
// case 2: salary is >= 37001 and < 87001 then tax is (3572 + ((salary - 37000)*0.325))
// case 3: annual salary is >= 87001 and < 180001 then tax is (19822 + ((salary - 87000)*0.35))
// case 4: annual salary is >= 180001 then tax is (54232 + ((salary - 180000)*0.45))

// import functionality from other files
const m = require('./main2');
const t = require('./taxrates');


// change data types for salary and super rate from strings to numbers
const annualSalary = Number(m.annualSalaryStr);
const superRate = Number(m.superRateStr)/100;

// get tax bands
const taxBands = t.taxBands;
const taxRates = t.taxRates;

// calculate the payPeriod (month end - month start)
const payPeriod = m.mEnd - m.mStart;
const payPeriodMonths = payPeriod + 1
const payPeriodFraction = payPeriodMonths/12


// calculate gross income for pay period
const getGrossIncome = () => {
    grossIncome = Math.round(annualSalary*payPeriodFraction);
    return grossIncome;
}

// calculate the super amount for pay period
const getSuperAmt = () => {
    superAmt = superRate*grossIncome;
    return superAmt;
}

// calculate tax owed
const getIncomeTax = (annualSalary) => {
    return annualSalary < 18201 ? 0
        :  (annualSalary >= 18201 && annualSalary < 37001) ? Math.round(((annualSalary - taxBands.taxBand0)*taxRates.taxRate1)*payPeriodFraction)
        :  (annualSalary >= 37001 && annualSalary < 87001) ? Math.round((3572 + (annualSalary - taxBands.taxBand1)*taxRates.taxRate2)*payPeriodFraction)
        :  (annualSalary >= 87001 && annualSalary < 180001) ? Math.round((19822 + (annualSalary - taxBands.taxBand2)*taxRates.taxRate3)*payPeriodFraction)
        :  Math.round((54232 + (annualSalary - taxBands.taxBand3)*taxRates.taxRate4)*payPeriodFraction);
}

console.log(3572 + Math.round(((annualSalary - taxBands.taxBand1)*taxRates.taxRate2)*payPeriodFraction))

// calculate net income
const getNetIncome = () => {
    netIncome = grossIncome - getIncomeTax(annualSalary);
    return netIncome;
}

// Exports
module.exports.grossIncome = getGrossIncome();
module.exports.superAmt = getSuperAmt(grossIncome);
module.exports.taxOwed = getIncomeTax(annualSalary);
module.exports.netIncome = getNetIncome();