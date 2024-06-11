const discription = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(discription);

let user={
    name:"vivek",
    id: "1234",
    age:22,
}
  console.log(Object.getOwnPropertyDescriptor(user, "name"));

  Object.defineProperty(user,'name',{
    enumerable: false
  })
  

  for(let key in user)
    {
        console.log(key,user[key]);
    }
