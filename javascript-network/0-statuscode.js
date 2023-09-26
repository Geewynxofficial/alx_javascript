const request = require('request');
function GET(url) {
    request.GET(url, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});
}