import React,{ useState , useEffect} from 'react';
import server from "./api/server";
import './App.css';
import Section from './components/Section.Component';
import TodoForm from "./components/TodoForm.Component";
import TodoList from './components/TodoList.Component';




function App() {


  const [todoList , setTodoList] = useState([]);

  useEffect( () => {

    const fetchData = async () => {
      const { data }= await server.get("/todo");
      setTodoList(data)
    }
    fetchData();

  }, [])

  const addTodo = async (todo) => {
    const { data } = await server.post("/todo" , todo);
    setTodoList( (oldList) => [...oldList , data] );
  }

  const removeTodo = async (id) => {
    await server.delete(`/todo/${id}`)
    setTodoList( (oldList) => oldList.filter( (itemList) => itemList._id !== id ) )
  }


  const updateTodo = async (id , todo) => {
   await server.put(`/todo/${id}` , todo);

  }

  return (
    <div className="App ui container center aligned">
        <Section>
          <h2>Todo-App</h2>
        </Section>
        <br />
        <Section>
          <TodoForm addTodo={addTodo}/>
        </Section>
        <Section>
          <TodoList removeTodo={removeTodo} updateTodo={updateTodo} todoList={todoList} />
        </Section>
    </div>
  );
}

export default App;
