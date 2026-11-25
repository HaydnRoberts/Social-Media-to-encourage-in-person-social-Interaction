
let http = require("http");
let port = 9000;

let mongoose = require("mongoose");
mongoose.pluralize(null);
let url = "mongodb://root:example@database:27017/people?authSource=admin";

let personSchema = new mongoose.Schema({
    surname: String,
    forename: String
});

let Person = mongoose.model("person", personSchema, "person");

let server = http.createServer(async function(request, response) {

    // handles CORS requests from the frontend and the preflight requests
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "application/json");
    if (request.method === "OPTIONS") {
        response.writeHead(204);
        response.end();
        return;
    }

    if (request.method !== "GET") {
        response.writeHead(405);
        response.end(JSON.stringify({
            error: "Method not allowed"
        }));
        return;
    }

    try {

        // retrieves all people from MongoDB
        const result = await Person.find().lean();
        response.writeHead(200);
        response.end(JSON.stringify(result));
    } catch (error) {
        console.error("Database error:", error);
        response.writeHead(500);
        response.end(JSON.stringify({
            error: "Unable to retrieve users"
        }));
    }
});

// connection to MongoDB before starting the server
mongoose.connect(url)
    .then(function() {

        console.log("Connected to MongoDB");
        server.listen(port, function() {
            console.log("Server listening on port " + port);
        });
    })
    .catch(function(error) {
        console.error("MongoDB connection failed:", error);
    });
