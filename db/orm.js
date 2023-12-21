const {MongoClient} = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017");

client.connect((error) => {
    if (error) {
        console.log(error);
        process.exit(-1);
    }
    console.log("Success connect to db");
});

module.exports = client;