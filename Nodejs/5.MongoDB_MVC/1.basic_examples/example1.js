// Import mongodb client
const {MongoClient} = require('mongodb');
const userName = 'admin';
const passsword = '123456@admin';
const dbName = 'blog';

const uri = "mongodb+srv://admin:123456admin@cluster0.chq5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true";

console.log(uri);

// create new mongo client
const client = new MongoClient(uri);

async function run() {
  try{
    // connect to mongodb cluster
    await client.connect();
    console.log('connected to MongoDb Atlas!');

    // // Access database
    // const db = client.db("blog");

    // // Access the collection
    // const collection = db.collection("posts");

    // // // Insert a new document
    // // const result = await collection.insertOne({name : 'Jhone Doe', age: '30'});

    // // console.log(result);

    // // // retrieve a document
    // // const document = await collection.findOne({name : 'Jhone Doe'});
    // // console.log(document);

    // // Inserting a document with nested structure
    // const result = await collection.insertOne({
    //   name: 'Jackson',
    //   age: 32,
    //   address: {
    //     street: '123 Main St',
    //     city: 'Anytown',
    //     country: 'USA'
    //   },
    //   hobbies: ['reading', 'traveling', 'photography']
    // })

  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    //  close the connection
    console.log('connected closed!')
    await client.close();
  }
}

run();
