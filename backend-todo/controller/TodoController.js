let Todo = require("../models/TodoModel");

// GET TODO
module.exports.getTodo = (req,res) => {
    Todo.find( (err , result) => {
        if(err) throw new Error(err)
       res.send(result);
    })
} 


// POST TODO
module.exports.addTodo = (req,res) => {
    Todo.create(req.body , (err, result) => {
        if(err) throw new Error(err);
        res.send(result);
    })
}


// PUT TODO
module.exports.updateTodo = (req,res) => {
    Todo.findOneAndUpdate({_id : req.params.id} , req.body , { new : true } ,(err,result) => {
        if(err) throw new Error(err);
        res.send(result);
    })
}

// DELETE TODO
module.exports.deleteTodo = (req,res) => {
    Todo.findOneAndRemove({_id : req.params.id} , (err,result) => {
        if(err) throw new Error(err);
        res.send(result);
    } )
}