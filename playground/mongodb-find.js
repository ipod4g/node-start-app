const { MongoClient, ObjectID} = require('mongodb');

const config = {
  useNewUrlParser: true,
};

MongoClient.connect('mongodb://localhost:27017/TodoApp', config, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoBD server')
  }
  console.log('Connected');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bb629903a9ab04fa2d06417')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable fethc todos', err)
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable fetch todos', err)
  })


  // client.close();
});