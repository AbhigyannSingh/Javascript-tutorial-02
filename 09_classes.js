// class User {
//     constructor(username,password, email){
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     encryptPassword(){
//         // this.password = this.password + "1234";
//         return `${this.password} 1234`
//     }
// }

// const chai = new User('abhi', 'asd', 'abhi@gmail.com')
// console.log(chai.encryptPassword());

function User(username,password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function(){
    return `${this.password} 1234`
}

const tea =new User('abhi', 'asd', 'abhi@gmai')
console.log(tea.encryptPassword());