class user {
       constructor(username,password){
        this.username=username;
        this.password=password;
       }
       changepass(new_pass){
        this.password=new_pass;
        console.log(this.password);
       }
       display(){
        console.log(this.username, this.password);
       }
       //static meanse you made private method not eny instance use this method

       static createid()
       {
        return 12345;
       }

};

let user1= new user("vivek","1234");
//user1.display();
//user1.changepass("vivek123"); 

// add prototype in user
user.prototype.changeusername= function(username){
        this.username=username;
        //console.log(this.username);
};
user1.changeusername("name");
//console.log(user1);

//***************inheritance****************************/

class teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
      addcourse()
      {
        console.log(`this course is added by ${this.username}`);
      }
}
let teacher1= new teacher("manan","vivekbaraiya@gmail.com");
teacher1.addcourse();

// it give error
//console.log(teacher1.createid());




