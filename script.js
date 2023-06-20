'use strict';


const num = 266219;
// const num = 123;
const numbers = Array.from(String(num));

// console.log(String(num).split(''));
// console.log(Array.from(String(num)));

const sum = numbers.reduce((currentSum, currentNumber) => {
    return currentSum * currentNumber;

    // console.log(currentSum);
    console.log(currentNumber);
}, 1);

// console.log(sum ** 3);
const sumPow = sum ** 3;

console.log(String(sumPow).substring(0, 2));

// ////////////////////
// let res = 0;

// numbers.forEach(num => {
//     res = res + +num;
//     // res += +num;
// });

// console.log(res);


// ////////////////////
let res = 1;

for(let i = 0; i < numbers.length; i++) {
    res = res * numbers[i];
}

console.log(res);