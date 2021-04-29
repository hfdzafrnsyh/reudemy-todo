import React from "react";
import Todos from "./Todos.Component";

const TodoList = ({removeTodo ,todoList , updateTodo}) => {
    const renderTodo = todoList.map(
        (item) => (
            <Todos title={item.title} completed={item.completed} 
        removeTodo={ (e) => removeTodo(item._id)}
            key={item.title}
            updateTodo={(dataTodo) => updateTodo(item._id , dataTodo)}
        />
        )
    )
    return(
        <div className="ui grid center aligned ">
            {renderTodo}
        </div>
    )
}

export default TodoList;