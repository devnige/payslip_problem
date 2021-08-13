// Tax rates and tax bands as per ATO

const taxRates = {
    taxRate0 : 0,
    taxRate1 : 0.19,
    taxRate2 : 0.325,
    taxRate3 : 0.35,
    taxRate4 : 0.45
}

const taxBands = {
    taxBand0 : 18200,
    taxBand1 : 37000,
    taxBand2 : 87000,
    taxBand3 : 180000
}



// function taxRates() {
//     const taxRate0 = 0;
//     const taxRate1 = 0.19;
//     const taxRate2 = 0.325;
//     const taxRate3 = 0.35;
//     const taxRate4 = 0.45;
// }

// function taxBands() {
//     const taxBand0 = 18200;
//     const taxBand1 = 37000;
//     const taxBand2 = 87000;
//     const taxBand3 = 180000;
//     //taxBand 4 is anything above 180000
// }

module.exports.taxRates = taxRates;
module.exports.taxBands = taxBands;