let para=" I am Nyneshwar ugale , im FRom nashik maharastra ,";

const nyno= new TextEncoder().encode(para);
console.log(nyno);


let a=nyno.reverse();
console.log(a)



let c=new TextDecoder().decode(a)
console.log(c)


function add(a,b){

    c=a+b;
}add(3,4);
add(5,7);