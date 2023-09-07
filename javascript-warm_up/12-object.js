#!/usr/bin/node
const myObject = [42, 50 ,12];
for (let i = 0; i < myObject.length; i++) {
    if (myObject[i] === 12) {
        myObject[i] = 89;
    }
}
console.log(myObject);