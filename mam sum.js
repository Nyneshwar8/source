// Object and nested Object
// let baap ={
//   name:'Baap comapany',
//   address:{

//     place:"xyz"
//   }
// }
// console.log('checking the value of baap obj',baap.address.place)

//Array

let company = ["abc", "xyz", true, 20];
// console.log('company', company)
let companyList = [
  {
    name: 'Baap comapany',
    address: {
      place: "paregoan"
    }
  },
   
  {
    name: 'Infosis',
    address: {
      place: "pune"
    }
  },
  {
    name: 'Wipro',
    address: {
      place: "thane"
    }
  },
]
// console.log('checking the list of companies',companyList[0].name)
companyList.map((company)=>{
  // console.log(company.name,company.address.place)
  if(company.address.place == 'Pune'){
    // console.log('I am in baap comany campus')
  }else if(company.address.place == 'paregoan'){
    // console.log('your not in company campus ')
  }else{
// console.log('heyyyy')
  }
})



// baapObj = {
//   name: 'Tcs',
//   address: {
//     place: "maumbai"
//   }
// }
// let test = companyList.push(baapObj);
// console.log('testtttttttt',test)



// function
// function welcome(){

// } 
// welcome();

// const welcome =()=>{console.log('hiiii')}
// welcome();
let str ="karishma";
let age= 24;
let isTrue =true;
let obj ={name:"xyz"}
let hello =()=>console.log('heyy');
let value =null;
let val =undefined;
console.log(typeof str)
console.log(typeof age)
console.log(typeof isTrue)
console.log(typeof obj)
console.log(typeof companyList)
console.log(typeof hello)
console.log(typeof val);
console.log(typeof value)