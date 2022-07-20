// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);
// console.log(number % 2 == 0);

// is even
// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// const myNumber = 1641;
// const isMyNumberEven = isEven(myNumber);
// console.log('is my number even', isMyNumberEven);

// const herNumber = 1892;
// const isHerNumberEven = isEven(herNumber);
// console.log('is her number even', isHerNumberEven);

//is odd
// function isOdd(number) {
//     if (number % 2 != 0) {
//         return true;
//     }
//     return false;
// }

// const myNumber = 1641;
// const isMyNumberOdd = isOdd(myNumber);
// console.log('is my number odd', isMyNumberOdd);

// const herNumber = 1892;
// const isHerNumberOdd = isOdd(herNumber);
// console.log('is her number odd', isHerNumberOdd);


//checking a number odd or even 
function oddOrEven(number) {
    if (number % 2 == 0) {
        console.log(number, 'is Even');
    }
    else if (number % 2 != 0) {
        console.log(number, 'is Odd');
    }
    else {
        console.log('Please enter a valid number');
    }
}

const myNumber = 33;
oddOrEven(myNumber);