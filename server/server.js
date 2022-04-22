const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const todoController = require('./controllers/todoController.js');
const PORT = 3000;

const MONGO_URI =
  'mongodb+srv://iamNurbek:Jouraboev30@soloproject.cvh7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI);

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRouter = express.Router();
app.use('/todo', todoRouter);

// Create a list item in the database
todoRouter.post('/', todoController.createTodo, (req, res) => {
  res.status(200).json(res.locals.newTodo);
});

// Get a student from the database
// http://localhost:3000/student/"name"
todoRouter.get('/get', todoController.getTodo, (req, res) => {
  res.status(200).json(res.locals.getTodo);
});

// Change a students name
// http://localhost:3000/student/"name"
todoRouter.patch('/update', todoController.updateTodo, (req, res) => {
  res.status(200).json(res.locals.updateTodo);
});

// Delete a student from the da tabase
// http://localhost:3000/student/"name"
todoRouter.delete('/delete/:id', todoController.deleteTodo, (req, res) => {
  res.status(200).json(res.locals.deleteTodo);
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
