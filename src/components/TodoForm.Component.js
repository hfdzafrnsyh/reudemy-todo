import React , { useState } from "react";

const TodoForm = ({ addTodo }) => {
    
    const [inputValue , setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return ;

        addTodo({ title : inputValue , completed : false});
    }
        
        return(
            <div className="todo-form">
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="ui grid center aligned">
                        <div className="row">
                            <div className="column five wide">
                                <input value={inputValue} onChange={handleInputChange} type="text" placeholder="Enter a Todo.."/>
                            </div>
                            <div className="column one wide">
                                <button type="submit" className="blue ui button circular icon"
                             
                                >
                                    <i className="white plus icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )

}

export default TodoForm;