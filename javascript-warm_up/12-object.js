#!/usr/bin/node
const myObjects = ["value: 12"];
const objects = [];
for (const myObject of myObjects) {
    const obj = {
        "type": "object",
        "value": myObject,
    }
}
for (let i = 0; i < myObjects.length; i++) {
    if (myObjects[i] === 12) {
        myObjects[i] = ["value: 12"];
    }
}
console.log(myObject);