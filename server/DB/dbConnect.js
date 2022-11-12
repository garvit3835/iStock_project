
async function connectData() {                // server - DB connection
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);
  const database = 'istock';
  let result = await client.connect()
  let db = result.db(database)
  let collection = db.collection("users")
  console.log("database connected")
  return (collection)
}

module.exports = connectData
