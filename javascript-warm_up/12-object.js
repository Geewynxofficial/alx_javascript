#!/usr/bin/node
const myObject = ["value: 12"];
for (let i = 0; i < myObject.length; i++) {
    if (myObject[i] === 12) {
        myObject[i] = ["value: 12"];
    }
}
console.log(myObject);