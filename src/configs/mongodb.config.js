require('dotenv').config({ path: '.env' });

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.DB_MONGODB_URL, function(err, db) {
    if (err) throw err;
    console.log("MongoDB created!");
    db.close();
  });

module.exports = MongoClient;