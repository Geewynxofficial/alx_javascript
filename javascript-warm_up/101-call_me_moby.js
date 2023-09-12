function executeTimeFunction(x, theFunction) {
    for (let i = 0; i < x; i++){
        theFunction();
    }
}
const callMeMoby = function () {
    console.log('Where I am!');
}
executeTimeFunction(5, callMeMoby);