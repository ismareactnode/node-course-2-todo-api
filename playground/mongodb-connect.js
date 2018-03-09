const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

db.collection('users').findOneAndUpdate({name: 'Pikatchou'},
{
  $inc: {
    age: -5
  }
},
{
  returnOriginal: false
}).then((res)=>{console.log('tres bien ouej.');})


  db.close();
});
