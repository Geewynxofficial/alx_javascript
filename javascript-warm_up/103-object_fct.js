let myObject = {
    type: "object", 
    value: 12
}

function incr(value) {
  value++;
}
incr(myObject.value);

module.exports = {myObject};