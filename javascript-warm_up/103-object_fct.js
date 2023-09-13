
let myObject = {
    type: "object", 
    value: 12,
    incr: incr
};
function incr(number) {
  number++;
}

for (let i =0; i < 3; i++){
myObject.value = incr(myObject.value);
}

module.exports = {myObject};