class USer{
    constructor(username){
        this.username = username;
    }

    static logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const abhi = new USer("ABhi")
console.log(abhi.logMe);
console.log(abhi.createId())