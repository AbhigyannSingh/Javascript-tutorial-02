const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// console.log(Math.PI);

const chai = {
    name:'ginger chai',
    price: 250,
    isAvailable: true
}

const descriptor2 = Object.getOwnPropertyDescriptor(chai, "name")
// console.log(chai);
console.log(descriptor2);

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
});

const descriptor3 = Object.getOwnPropertyDescriptor(chai, "name")
// console.log(chai);
console.log(descriptor3);

