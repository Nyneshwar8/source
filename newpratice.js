
console.log("........1st array.........")

let stud=['nyno','nikesh','atulu','akashy','utkarsh','dhanu','rushi','krishna','akash','vikas'];
for(let i=0;i<stud.length;i++)
{
    console.log(stud[i]);
}
console.log(".........2nd array.........")

let compnay=['honda','wipro','tcs','tata','accenture','wns','baap','telco'];
for(let i=0;i<compnay.length;i++)
console.log(compnay[i]);


console.log(".........3rd array.........")
var fruit=['banan','apple','mango']; 
console.log(fruit);


console.log("......1 array of object......")
// array of object
let cars = [
    {
      color: "purple",
      type: "minivan",
      
      capacity: 7
    },
    {
      color: "red",
      type: "station wagon",
     
      capacity: 5
    },]

    console.log(cars[1],cars[0]);
   console.log(cars.unshift(cars));


   console.log("......2 array of object......")


let doc={ name:'nyno',
address:'pune'

}
function doc1(){ console.log(doc.name,doc.address);
}

doc1();


 console.log("........ array of object........") 

let student11=[{
    stud_info:{ name:'nyno',
    contact:223322,
    address:"pune",
},
     teacher:{
        teacher_name:'nyno',
        sub:'computer',
        sir_address:'mumbai',

     }
}
]
// console.log(student11);
// console.log(student11[0]);
// console.log(student11.stud_info);
console.log(student11[0]);
console.log(student11[1]);



     


