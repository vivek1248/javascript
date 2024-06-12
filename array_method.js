let arr=[0,1,2,3,4,5,6,7,8,9,];
arr.push(10);
//console.log(arr);
//console.log(arr.pop());
//let new_arr=arr.slice(0,5);
//console.log(new_arr);
//console.log(arr);

//---------when we do splice operation then new array will be modified and speific indixes 
//   element going to reduce in actual array

//let new_arr2=arr.splice(0,5);


//console.log(new_arr2);
//console.log(arr);

// ------------------------------------------sift and unshift 

// ------------------------------------filter 



   // it return array element who pass this filter and form new array 

//let new_arr=arr.filter(x=>x%2===0);
//console.log(new_arr);

// reduce is use to perform any operation on array and return on final value 

let sum = arr.reduce((acc,cur)=>acc+cur,0);
console.log(sum);
//console.log(arr);

// find -->return value of first element ho pass the test 

let first = arr.find((item)=>item>2);
console.log(first);

//findindex ---> it return index of the element who pass the test first 

let firstindex =arr.findIndex(item =>item>4);
console.log(firstindex);

//includes -->it return true vlue if element found in the array 
let ispresent = arr.includes(2);
console.log(ispresent);

// sort -->sort elemet base on expression 

arr.sort((a,b)=>b-a);
console.log(arr);

// reverse --> reverse a array
arr.reverse();
console.log(arr);




