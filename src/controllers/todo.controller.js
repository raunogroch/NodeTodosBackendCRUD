const ToDo = require("../models/toDo.model");

const TodoController = {};

TodoController.getAllTodos = async (_, res) => {
  const todos = await ToDo.find();
  res.status(200).json(todos);
};

TodoController.getTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await ToDo.findById(id);
  res.status(200).json(todo);
};

TodoController.createTodo = (req, res) => {
  const { title, description, completed } = req.body;
  if (title === undefined || description === undefined) {
    return res.status(200).json("Warning, All fields are required!");
  }
  const todo = new ToDo({ title, description, completed });
  todo.save();
  res.status(200).json("Success, your todo was added successfully.");
};

TodoController.updateTodo = async (req, res) => {
  const { id, title, description, completed } = req.body;

  try {
    const todo = await ToDo.findByIdAndUpdate(id, {
      title,
      description,
      completed,
    });
    todo.save();

    res.status(200).json("Success, your todo was updated successfully.");
  } catch (error) {
    res.status(404).json("Something happen try again please.");
  }
};

TodoController.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const exist = await ToDo.findById(id);
  if (!exist) {
    return res.status(400).json("The todo isn't exist.");
  }
  await ToDo.deleteOne({ _id: id });
  res.status(200).json("Success, your todo was deleted successfully.");
};

module.exports = TodoController;
