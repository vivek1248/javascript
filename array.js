//create empty array
let array=[];
let array2=['vivek','yovan','avinash'];
// array2.forEach((value)=>array.push(value));
// //array=array2;
// //console.log(array);
// delete array2[0];
// console.log(array2);
// console.log(array);
//array=Array.from(array2);
array=[...array2];
delete array2[0];
//console.log(array2);
//console.log(array);

// convert object into array

let obj={
    x:1,
    b:1,
    c:1,
    d:1,
}
let keyarray=Object.keys(obj);
let valuearray=Object.values(obj);
console.log(keyarray,valuearray);


