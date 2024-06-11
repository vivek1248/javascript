// create empty object with new key word
const obj= new Object();
obj.x=2;
obj.y=3;
//console.log(obj);

// problem statment 
// you need to take only first name of name property of object
const school={
    name:"timana high school",
    first_name : function()
                 {
                     return school.name.split(" ",2);
                 }
};
 let arr=school.first_name();
 //console.log(arr);

 //*****************inherit properties */
 //console.log(obj.hasOwnProperty('x'));

 //accessing with bracket 
 //console.log(school['name']);
 delete obj.x;
 //console.log(obj.x);

  // inherit propertiy from one object to another
 
  let obj1={
    x:1,
    b:2
  };
  let obj2={
    x:3,
    c:1
  };
  obj1.__proto__=obj2;
  console.log(obj1.x);


