#!/usr/bin/node
const numbers = ["value: 12"];

const objects = [];

for (const number of numbers) {
  const obj = {
    "type": "object",
    "value": number,
  };

  if (number === "value: 12") {
    obj.value = 89;
  }

  objects.push(obj);
}

console.log(objects);