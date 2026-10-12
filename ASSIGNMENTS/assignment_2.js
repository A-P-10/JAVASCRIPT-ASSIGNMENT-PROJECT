let billAmount = Number("100");
let tipPercentageInput = Number("15");

let calculatedTip = billAmount * (tipPercentageInput / 100);
let totalAmount = billAmount + calculatedTip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentageInput}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}\n`);