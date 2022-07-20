//calculating factorial in a function
// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial(7);
// console.log('Factorial of 7 is ', firstFactorial);

// var secondFactorial = getFactorial(9);
// console.log('Factorial of 9 is ', secondFactorial); 


//Practise
// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// const factorialOf = 6;
// const result = getFactorial(factorialOf);
// console.log('The factorial of', factorialOf, 'is', result);


// //Find the sum of numbers from 1 to 10 
// function getTotal() {
//     let total = 0;
//     for (let i = 1; i <= 4; i++) {
//         total = total + i;
//     }
//     return total;
// }

// const totalResult = getTotal();
// console.log('The sum of 1 to 10 is', totalResult);

//Find the sum of numbers from 1 to n.
// function getTotal(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total = total + i;
//     }
//     return total;
// }

// const lastNumberN = 5;
// const result = getTotal(lastNumberN);
// console.log('The sum of number 1 to', lastNumberN, 'is', result);

//Find the sum of numbers from m to n
function getTotal(m, n) {
    let total = 0;
    for (let i = m; i <= n; i++) {
        total = total + i;
    }
    return total;
}

const firstNumberM = 10;
const lastNumberN = 15;
const result = getTotal(firstNumberM, lastNumberN);
console.log('The sum of numbers', firstNumberM, 'to', lastNumberN, 'is', result);