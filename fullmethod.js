console.log("_____________________pop_________________________")
let education = ['java', 'pyton', 'react', 'angular'];
education.pop('angular');
console.log(education);


console.log("_____________________filter_________________________")
const ages = [32, 33, 16, 40,11,2];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
 console.log(result);
console.log("_____________________map_________________________")
const vals =[22,24,58,69,87];
  const newArray = vals.map(myFunction);

  function myFunction(num){
    return num + 2;
  }
 console.log(newArray);
 console.log("_____________________sort_________________________")
let education1 = ['java', 'pyton', 'react', 'angular'];
education1.sort();
console.log(education1);

console.log("_____________________push_________________________")
let education2 = ['java', 'pyton', 'react', 'angular'];
education2.push('c++');
console.log(education2);


console.log("_____________________shift_________________________")
let education3 = ['java', 'pyton', 'react', 'angular'];
education3.shift();
console.log(education3);

console.log("_____________________unshift_________________________")
let education4 = ['java', 'pyton', 'react', 'angular'];
education4.unshift("java");
console.log(education4);

console.log("_____________________indexof_________________________")
let education5 ="helol bro im name is nyneshwar ugale ,and im learning the java ";
 let hhh=education5.indexOf("bro");
console.log(hhh);


console.log("_____________________join_________________________")
// let education6 ="hello bro im name is nyneshwar ugale ,and im learning the java ";
let education6 = ['java', 'pyton', 'react', 'angular'];
let text = education6 .join(" and ");
console.log(text);


console.log("_____________________COPYWHITHIN_________________________")
// let education6 ="hello bro im name is nyneshwar ugale ,and im learning the java ";
let education7 = ['java', 'pyton', 'react', 'angular'];
let text1 = education7 .copyWithin(2,0);
console.log(text1);


console.log("_____________________SLICE_________________________")
// let education6 ="hello bro im name is nyneshwar ugale ,and im learning the java ";
let education8 = ['java', 'pyton', 'react', 'angular'];
let text2 = education8 .slice(0,3);
console.log(text2);


