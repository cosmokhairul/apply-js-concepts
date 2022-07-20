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