let http = require("http");
let port = 9000;

let server = http.createServer(
    function(request, response) {
        var Users = [
            {"surname": "Smith"},
            {"surname": "Jones"}
        ];

        response.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        response.end(JSON.stringify(Users));
    }
);

server.listen(port, function() {
    console.log("Server listening on port " + port);
});