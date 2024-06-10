// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completed');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed`');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'Abhi', email:'abhi@gmail.com'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error)
            {
                resolve({username:'Abhi', password:'1234'})
            }
        else
        {
            reject('ERROR: SOMETHING WENT WRONG')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}) .then(function(username){
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('everything executed');
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error)
            {
                resolve({username:'Abhiiiii', password:'1234'})
            }
        else
        {
            reject('ERROR: js not working')
        }
    }, 1000)
});

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
