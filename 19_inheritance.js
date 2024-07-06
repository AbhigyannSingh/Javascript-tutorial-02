class User{
    constructor(name){
        this.name = name;
}

login()
{
    console.log(`USERNAME is ${this.name}`)
}
}

class Teacher extends User{
    constructor(name, email,password){
        super(name)
        this.password = password
        this.email = email
    }

    addCOurse(){
        console.log(`A new course was added by ${this.name}`);
    }
}

const chai = new Teacher('chai', 'chai@gmail.com', '1234')
chai.addCOurse();

console.log(chai instanceof Teacher);