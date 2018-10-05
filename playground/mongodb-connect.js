// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');


const config = {
  useNewUrlParser: true,
};

MongoClient.connect('mongodb://localhost:27017/TodoApp', config, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoBD server')
  }
  console.log('Connected');

  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   copmleted: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo', error)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  //
  // });

  // db.collection('Users').insertOne({
  //   name: "ROMAN",
  //   age: 25,
  //   location: "Lviv"
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo', error)
  //   }
  //
  //   console.log(JSON.stringify(result.ops))
  // })

  client.close();
});