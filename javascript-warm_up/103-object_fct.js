function incr(value) {
  return value + 1;
}

 myObject = {
    type: "object", 
    value: 12,
    incr: incr
};


for (let i = 0; i < 3; i++){
myObject.value = incr(myObject.value);
}
console.log(myObject);
module.exports = {myObject};