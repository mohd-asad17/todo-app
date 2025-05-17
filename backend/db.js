const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://asadn01702:UzOXtjyJwKwW8BXz@cluster0.vtx4jio.mongodb.net/todo-app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}