 function greet1 (username){
          console.log(`welcome ${this.username}`);
 }

 let user={
     username:"vivek baraiya",
     age:22
 }

 // use of bind function
 let welcome_messege = greet1.bind(user);
// welcome_messege();

// use case of call and apply

function greet2 (age1,age2){
    console.log(`welcome ${this.username} and your age is ${age1} second ${age2}`);
}
greet2.call(user,22);
greet2.apply(user,[22,33])