console.log("1)..........normal array.........")
const bike = ["honda", "java", "rs"];
console.log(bike);
console.log("______________________________________________")


console.log("2)...........normal array 3rd element.........")
const bike2 = ["honda", "java", "rs100", "splender", "bulet"];
console.log(bike2[3]);
console.log("______________________________________________")

console.log("3)..........push array............")
let dailyActivities = ['eat', 'sleep'];
dailyActivities.push('exercise');
console.log(dailyActivities);
console.log("______________________________________________")

console.log("4).........unshift array..........")
let acitivities = ['eat', 'sleep', 'exercise'];
acitivities.unshift('study', 'yoga');
console.log(acitivities);
console.log("______________________________________________")

console.log("5).........pop array..........")
let education = ['java', 'pyton', 'react', 'angular'];
education.pop('angular');
console.log(education);
console.log("______________________________________________")


console.log("6).........shift array 2.........")
let education1 = ['java', 'pyton', 'react', 'angular'];
education1.shift([0]);
console.log(education1);
console.log("______________________________________________")


console.log("7).........length of array........")
const study = ['program', 'pratice', 'sleep', 'eat', 'program', 'pratice'];
console.log(study.length);
console.log("______________________________________________")

console.log("8).........hello word.............")
let a = "hello";
let b = "word";

function print(a, b) {
  console.log(a, b);
}
print(a, b)
console.log("______________________________________________")


console.log("9).........arithmatic function........")
let aa = 10;
let bb = 20;
function arithmatic() {

  console.log(aa - bb)
  console.log(aa * bb)
  console.log(aa / bb)


}
arithmatic()
console.log("______________________________________________")


console.log("10)............array of object............")
let student11 = [{
  stud_info: {
    name: 'nyno',
    contact: 9011617224,
    address: "nashik",
  }
}]
console.log(student11);
console.log("______________________________________________")




console.log("11)..........reshma variabal...........")
const reshma = ["reshma :", "pyton", "react", "angular", "java", "javscript"];
console.log(reshma);
console.log("______________________________________________")



console.log("12)..................getelementbyid.........")
console.log("done in html file there")
console.log("______________________________________________")



console.log("13)...............multiplication.............")
function multiplication() {
  for (let i = 234; i <= 2340; i = i + 234)
    console.log("tabel of 234 is" + i);
}
multiplication()


console.log("______________________________________________")

console.log("14)................given number  multiply..............")
const multiply = [5, 4, 3, 8, 9, 2, 5, 5, 7, 8, 7]






console.log("____________________________________________________")
console.log("15)................intigers..............")
function division() {
  console.log(4.23 / 3.56)
}
division()





console.log("16)................square root..............")

const number = [3, 5, 6, 1.3, 5, 79, 65];
const squareNumber = number.map(num => num * num);
console.log(squareNumber);


console.log("____________________________________________________")
console.log("17)................pop 4th element..............")

let adding = ['atul', 'djay', 'rushi', 'rohini', "shalini", "nikita"]
adding.splice(4, 1,)
console.log(adding)


console.log("____________________________________________________")
console.log("18)................4th elemt remove..............")
const add = [1, 2, 3, 4, 5, 6, 7, 8, 9];
add.splice(4, 0, 10);
console.log(add)


console.log("____________________________________________________")
console.log("19)................object and display..............")
const java = {
  Perform: "nice",
  job1: "frontend",
  job2: "backend",
  salary: 320000,
}
console.log(java)


console.log("____________________________________________________")
console.log("20)................random no 6 digit..............")
function betweenRandomNumber(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}
console.log(
  "6 Digit code: " + betweenRandomNumber(700000, 999999)
)




console.log("____________________________________________________")
console.log("21).................type of string..................")
var name = "nyneshwar"
console.log("" + 1 + 10 + 2 - 5 + "8")



console.log("____________________________________________________")
console.log("22).................divisible by 2 & 3..................")
let a1 = 60;
if ((a1 % 2 == 0) && (a1 % 3 == 0)) {
  console.log("the no is divisible")
}
else console.log("the no is not divisible")


console.log("____________________________________________________")
console.log("23).................student mark..................")


const studentmark = {

  science: 100,
  math: 200,

};
for (let nyno in studentmark) {

  let value;
  value = studentmark[nyno];
  console.log(nyno + " - " + value);
}




console.log("____________________________________________________")
console.log("24).................user input..................")
console.log("......doen in html files..........")


console.log("____________________________________________________")
console.log("25).................array of square..................")
function array(a) {

  let squa = [];

  for (let i = 0; i < a.length; i++) {
    squa.push(Math.pow(a[i], 2));
  }

  return squa;
}

console.log(array([4, 5, 6]));



console.log("____________________________________________________")
console.log("26)...............current date.......................")
let today = new Date().toLocaleDateString()

console.log(today)


console.log("____________________________________________________")
console.log("27)...............multiply the value of array......................")
const multi = [100, 20, 30, 40, 60];
for (let i = 0; i < multi.length; i++) {
  total = multi[i] * 10
  console.log(total)
}

console.log("____________________________________________________")
console.log("28)...............convert to string.....................")

const nynofriend = ["sanket", "ketan", "kunal", "atul", "amrapali"];
const c = nynofriend.toString();
console.log(c);

console.log("____________________________________________________")
console.log("29)...............function the call.....................")

const emplyee={
  post:"deloper",
  post2:"seniordevloper",
  post3:"backenddevloper",
}
function emplyee1(){
 console.log(emplyee)
}
emplyee1()





console.log("____________________________________________________")
console.log("30).................student name store.....................")
 const studentname1=["sanket","krish","ketan","mahipal","dyhan","atul","madhuri","rutu","sakshi"];
  studentname1.push("6");
  console.log(studentname1);




  console.log("____________________________________________________")
console.log("31).................alll method in one array .....................")
const all=["a","b","c","d","e","f","g","h"];
 all.push("i")
 console.log(all);
  
 all.pop()
 console.log(all);

 all.unshift("aa")
 console.log(all)
   
 all.shift()
 console.log(all)


 console.log("____________________________________________________")
 console.log("32).................jiond the element .....................")
 const joind=["america","usa","canada","argantina","germany","dubai","thailand"]
  text=joind.join('*')
  console.log(text)
   

  console.log("____________________________________________________")
 console.log("33).................short the element .....................")
 const joindd=["america","usa","canada","argantina","germany","dubai","thailand"];
 joindd.sort()
 console.log(joindd)






 console.log("____________________________________________________")
 console.log("34).................highest value in aray.....................")
 const highest = [1,3,2,5,7,8,3,8,10,8,9];
console.log(Math.max(57454,67463,5742,9896,7545,8564,345545,85666,15550,8333,1119));



console.log("____________________________________________________")
 console.log("35).................reverse the number....................")
function rev(){
    for(let i=1;i<20;i++)
    console.log(i>10?20-i:i);
}
 
rev();


console.log("____________________________________________________")
 console.log("36).................whithout arguments....................")
 let nyno=30;
 let nyno2=40;
  let addd=() => console.log(nyno+nyno2)
  addd()


  console.log("____________________________________________________");
 console.log("37)..............calculate the value in array....................");

 console.log("__________________________________________________________________");
 console.log("38)..............how could you destructure aray elemnt....................");
        const address1=["583,thebaapcompany","434 sangamner CA","USA"];
        console.log(
          
          "address: "+ address1[0],
          "address: "+ address1[1],
          "address:   "+ address1[2],

        )


        console.log("__________________________________________________________________");
 console.log("39)..............write a simple javascripte program to join all elemntnts of the following array into....................");
 const myColor=["red","green","white","black"];
 console.log(myColor.toString());
 console.log(myColor.join("*"));
 console.log(myColor.join('+'));