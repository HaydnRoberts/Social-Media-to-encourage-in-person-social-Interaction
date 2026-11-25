db = db.getSiblingDB('admin');
db.auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD
);
const data = [
    { "surname": "Smith", "forename": "John" },
    { "surname": "Jones", "forename": "Sally" },
    { "surname": "Allen", "forename": "Claire" }
];
db = db.getSiblingDB('people')
db.person.insertMany(data);
