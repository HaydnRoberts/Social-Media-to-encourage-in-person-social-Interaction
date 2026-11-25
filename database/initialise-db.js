const data = [
    { "surname": "Smith", "forename": "John" },
    { "surname": "Jones", "forename": "Sally" },
    { "surname": "Allen", "forename": "Claire" }
];
db = db.getSiblingDB('people')
db.person.insertMany(data);
