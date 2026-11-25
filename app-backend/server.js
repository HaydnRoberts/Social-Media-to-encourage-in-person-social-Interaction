let http = require("http");
let port = 9000;
let mongoose = require("mongoose");
mongoose.pluralize(null);
let url = "mongodb://root:example@database:27017/people?authSource=admin";
mongoose.connect(url);

let personSchema = new mongoose.Schema({
    surname: String, forename: String
});
let Person = mongoose.model("person", personSchema);

let server = http.createServer(async function(request, response) {
    const result = await Person.find();
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    response.end(JSON.stringify(result));
});
    server.listen(port, function() {
    console.log("Server listening on " + port);
});