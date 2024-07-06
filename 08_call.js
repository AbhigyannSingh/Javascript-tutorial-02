function SetUsername(username){
    this.username = username
}

function CreateUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai =new CreateUser("abhi", "abhi@gmail.com", "1234")
console.log(chai);