let myName = "abhigyan     "
//console.log(myName.trueLength)

console.log(myName.trim().length);


let heroPower = { 
    thor: 'hammer',
    spidrman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhi = function(){
    console.log(`abhi is present in all objects`);
}

heroPower.abhi()

//inheritance


const user = {
    name: 'abhigyan',
    email: 'abhi@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false,
   
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//modern method
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "abhigykhhhjan           ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`${this.trim().length}`);
}

anotherUsername.trueLength()

