#!/usr/bin/node
function add(num1, num2) {
const sum = num1 + num2;
return sum;
};
const add = require('./13-add').add;
console.log(add(3, 5));