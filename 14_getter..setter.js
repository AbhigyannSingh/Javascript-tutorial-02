class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password()
    {
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value; 
    }
}

const abhi = new User("abhi@gmail.com", '1234asdf')
console.log(abhi.password);