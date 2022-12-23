var loanamount = 2000000;
var intrest = 8.5;
const month = 12;
let section1 = (loanamount / 100 * intrest)
console.log("to calculate one month intrest is " + section1)
let section2 = (section1 * month)
console.log("to calculate one year intrest is" + section2)
let section3 = (section2 * 10)
console.log("to calculate ten year intrest is" + section3)


let section4 = (loanamount / month + section1)
console.log("to calculate one month emi is" + section4)
let section5 = (section4 * month)
console.log("to calculate one year emi is" + section5)
let section6 = (section5 * 10)
console.log("to calculate ten year emi is" + section6)