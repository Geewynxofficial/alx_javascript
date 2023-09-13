
let myObject = {
    type: "object", 
    value: 12
};
function incr() {
  myObject++;
}


incr(myObject.value);

module.exports = {myObject};