module.exports = {myObject};

function incr(number) {
  return number + 1;
}

let myObject = {
    type: "object", 
    value: 12,
    incr: incr
};


for (let i = 0; i < 3; i++){
myObject.value = incr(myObject.value);
}

