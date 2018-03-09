const express = require('express');
const bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var { User } = require('./models/user');
var { Todo } = require('./models/todo');

const app = express();

const port = 4000;
app.listen(port, () => {console.log('Started on port', port);});


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
 var todo = new Todo({
   text: req.body.text
 });
 todo.save().then((doc)=>{res.send(doc);},
 (err)=>{res.status(400).send(err)});
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos)=>{
    res.send({todos})
  }, (e)=>{
    res.status(400).send(e);
  })
})
