const Todo = require('../models/todoModel.js');

const TodoController = {
  // This is where the todo list will be created
  // and stored in the database
  // <---------------------------------------------------------------- POST ----------------------------------------------------------------> ✅

  createTodo(req, res, next) {
    Todo.create({
      todo: req.body.todo,
    })
      .then((data) => {
        res.locals.newTodo = data;
        return next();
      })
      .catch((err) => {
        console.log('❌❌❌<-- todo CREATE -->❌❌❌ ', err);
      });
  },

  // This is where I can get the todo list items to display
  // <---------------------------------------------------------------- GET ----------------------------------------------------------------> ✅
  getTodo(req, res, next) {
    Todo.find()
      .then((data) => {
        res.locals.getTodo = data;
        return next();
      })
      .catch((err) => {
        console.log('❌❌❌<-- todo CREATE -->❌❌❌ ', err);
      });
  },

  // update any todo items from the frontend to the database
  // <---------------------------------------------------------------- PATCH ----------------------------------------------------------------> ❌

  updateTodo(req, res, next) {
    Todo.findOneAndUpdate(
      {
        todo: req.body.todo,
      },
      {
        todo: req.body.updateTodo,
      }
    )
      .then((data) => {
        res.locals.updateTodo = data;
        return next();
      })
      .catch((err) => {
        console.log('❌❌❌<-- todo UPDATE -->❌❌❌ ', err);
      });
  },

  // delete an item after completion
  // <---------------------------------------------------------------- DELETE ----------------------------------------------------------------> ❌
  deleteTodo(req, res, next) {
    Todo.findOneAndDelete({
      _id: req.params.id,
    })
      .then((data) => {
        res.locals.deleteTodo = data;
        console.log('Delete Succesfully');
        return next();
      })
      .catch((err) => {
        console.log('❌❌❌<-- todo DELETE -->❌❌❌ ', err);
      });
  },
};

module.exports = TodoController;
