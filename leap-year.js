// function isLeapYear(year) {
//     if (year % 4 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const myYear = 2087;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log('Is my year leap year', isMyYearLeapYear);

// const yourYear = 2224;
// const isYourYearLeapYear = isLeapYear(yourYear);
// console.log('is your year leap year', isYourYearLeapYear);

//actual coding of checking a year whether it is leap year or not 
function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) && (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);