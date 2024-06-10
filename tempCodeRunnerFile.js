// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls, cryptography network
    setTimeout(function(){
        console.log('Async task completed');