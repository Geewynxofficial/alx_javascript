#!/usr/bin/node
let myObject = {
    type: "object", 
    value: 12
};
console.log(myObject);

if (myObject.value === 12) {
    myObject.value = 89;
}
console.log(myObject);