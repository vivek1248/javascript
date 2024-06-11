 let user ={
    name:"vivek baraiya",
    age : 22,
    x:1,
    b:2
 }

 for (key in user)
    {
        console.log(key, user[key]);
    }
  // get error that is  
  //user is not iterable
  // because it is object and object is 
  
 for (key of user)
    {
        console.log(key,user[key])
    }   
    