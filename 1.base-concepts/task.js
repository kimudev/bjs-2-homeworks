"use strict"
function solveEquation(a, b, c) {
    let D = Math.pow(b, 2) - (4 * a * c);
    let result = [];
    if (D < 0) {
        return result;
    } else if (D === 0) {
        result.push(-b / (2 * a));
        return result;
    } else if (D > 0) {
        result.push((-b + Math.sqrt(D)) / (2 * a));
        result.push((-b - Math.sqrt(D)) / (2 * a));
        return result;
    };  
};

// console.log(solveEquation(8, 2, 2));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rate = percent / 100;
  let P = rate / 12;
  let S = amount - contribution;

  let monthlyFee = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));

  let totalAmount = monthlyFee * countMonths;
  return Number(totalAmount.toFixed(2));
};

// console.log(calculateTotalMortgage(3, 1000000, 5000000, 300));