// 7 loops in javascript 
/*
1.for
2.while
3.do while
4.for in
5. for of
6.for each
7. map
*/
// for in -> it is mostly use for object itteration menace key and value

let obj={
    x:3,
    y:1,
    z:2,
};
for (key in obj)
    {
        //console.log(key,obj[key]);
    }
//fir of -> it use use to itterate array ,object,map,set
let arr=[1,3,4,5,5];
for(let a of arr)
    {
        //console.log(arr[a]);
    }    

// for each -> it is method of array it will exicute same function for all array element
let arr2=[1,3,4,5,5,5];
arr2.forEach(function display(value)
{
    //console.log(value)
}) 

// map loop -> proble is if you want to store this for each result you can not do it 
// int this case you need to use map loop beacuse it return new arry but for each dose
// not return any thing

let arr3= arr2.map(function square(val)
{
    return val*val;
})
console.log(arr3);