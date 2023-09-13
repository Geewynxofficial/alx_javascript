let myObject = {
    type: "object", 
    value: 12
};

function incr(value) {
  incr++;
  value();
}
incr(myObject.value);

module.exports = {myObject};