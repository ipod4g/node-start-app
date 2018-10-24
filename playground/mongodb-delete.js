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


  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
  //   console.log(result)
  // })


  //deleteOne
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Todos').deleteOne({_id: ObjectID('5bd03fadc8b80b3fb3f6eb7c')}).then((result) => {
    console.log(result);
  })

  // client.close();
});