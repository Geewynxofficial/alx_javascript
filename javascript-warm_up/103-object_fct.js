function incr(number) {
    number++;
    number()
}
function myObject(number, value) {
    number++;
    value(number);
}
module.exports = {myObject};