const express = require("express");
const router  = express.Router();
const cors = require("cors");
const TodoController = require("../../controller/TodoController");

// cors
router.use(cors());

router.get('/' , TodoController.getTodo);
router.post('/' , TodoController.addTodo);
router.put('/:id' , TodoController.updateTodo);
router.delete('/:id' , TodoController.deleteTodo);

module.exports = router