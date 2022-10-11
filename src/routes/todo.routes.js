const express = require("express")
const { createTodo, deleteTodo, getAllTodos, getTodo, updateTodo } = require("../controllers/todo.controller.js")
const routes = express.Router()

routes.get('/', getAllTodos)

routes.post('/', createTodo)

routes.get('/:id', getTodo)

routes.put('/update', updateTodo)

routes.delete('/:id', deleteTodo)

module.exports = routes