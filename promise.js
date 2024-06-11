const promiseone =new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error=true;
        if(!error)
            {
                resolve({username:"vivek baraiya", pass:"12345"});
            }
            else{
                reject("somting went rong");
            }
    },2000)
})
// promiseone.then(function(user)
// {
//     console.log(user.username,user.pass);

// }).catch(function(error)
// {
//     console.log(error);
// });

//async await 

// async function consume_promiseone(){
//     try {
//         const response= await promiseone;
//         console.log(response); 
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consume_promiseone();

//fetch 
fetch('https://api.github.com/users/vivek1248')
.then(function(response)
{
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error)
{
    console.log(error);
});