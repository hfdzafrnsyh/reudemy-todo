const mongoose = require("mongoose");
require("../db/database");

const TodoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    completed : {
        type : Boolean,
        required : true
    }
})


const Todo = mongoose.model("Todo" , TodoSchema);

module.exports = Todo;