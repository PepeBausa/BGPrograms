var http = require("http");

var host = 'localhost';
var port = 80;

var server = http.createServer(function (req, res) {
    res.end('<h1>Hola Mundo,/h1>');
});



server.listen(port, host, () => {
    console.log(`Server is running on http://${host}`);
});
