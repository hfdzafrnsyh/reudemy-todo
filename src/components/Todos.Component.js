import React , { useState } from "react";


const Todos = ({title , completed , removeTodo , updateTodo}) => {

    const [isEdit , setIsEdit ] = useState(false);
    const [isValue , setIsValue] = useState(title);
    const [temptValue, setTemptValue] = useState(title);
    const [completedState,setCompleted] = useState(completed);

    const handleDoubleClick = () => {
        setIsEdit(true);
    }
    const handleKeyDown = (e) => {
        const key = e.keyCode;

        if(key === 13){
            updateTodo({ title : temptValue});
            setIsValue(temptValue);
            setIsEdit(false);
        }else if( key === 27 ) {
            setTemptValue(isValue);
            setIsEdit(false);
        }
    }

    const hanldeOnChange = (e) => {
        setTemptValue(e.target.value);
    }

    const handleCompleted = () => {
        setCompleted( oldCompleted =>{ 
            const newState = !oldCompleted;
            updateTodo({completed : newState})
            return newState;
        });
    }


    return(
        <div className="row" onDoubleClick={handleDoubleClick}>
      {
        isEdit ?
      
      <div className="column seven wide">
          <div className="ui input fluid">
           <input
           onChange={hanldeOnChange}
            onKeyDown={handleKeyDown}
               autoFocus={true}
               value={temptValue}
           /> 
          </div>
      </div>  :
        <>
          <div className="column five wide">
              <h3 className={"ui header " + (completedState ? "green" : "") } >{isValue}</h3>
          </div>

          <div className="column one wide">
              <button
              onClick={handleCompleted}
               className="ui button circluar icon green">
               <i className="check icon"></i>
               </button>
          </div>

          <div className="column one wide">
              <button
               onClick={removeTodo}
               className="ui button circluar icon red">
               <i className="remove icon"></i>
               </button>
          </div>
        </>
      }
    </div>
    
    )
}

export default Todos;