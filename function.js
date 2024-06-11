// arrow function
//(parameter1,parameter2,..)=> return(expression)  -- oneline
/* same as (parameter1,..)=>{
      return expression
}
*/
// call function 

function f1(){
      console.log("vivek");
      return 3;
}
function f2(){
      console.log("yovan");
      return 4;
}
function f3(){
      console.log("avinash");
      return 5;
}
let x=(f1(), f2() ,f3)();
console.log(x);
//console.log(typeof x);
//console.log(x);