const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shresthtech10:*****@cluster0.nwaqnqa.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}