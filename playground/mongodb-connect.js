const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err) {
    return console.log('unable to connect to MongoDB server');
  }




  db.close();
});
