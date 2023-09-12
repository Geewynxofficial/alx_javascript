function executeTimeFunction(x, theFunction) {
    for (let i = 0; i < x; i++){
        theFunction();
    }
}
function callMeMoby() {
    console.log('Where I am!');
}
executeTimeFunction(5, callMeMoby);