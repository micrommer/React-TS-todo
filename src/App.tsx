import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from './Todo.model';

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);

  const addTodoHandler = (todo:string)=>{
    const todoObj = {
      id : Math.random().toString(),
      text : todo
    };
    
    setTodo(prevState => [...prevState, todoObj])
  };

  const deleteTodoHandler = (id : string) =>{
    setTodo(
      prev => {return prev.filter(todo => todo.id !== id)}
    );
  };

  return (
    <div>
      <NewTodo addTodo={addTodoHandler}/>
      <TodoList deleteHandler={deleteTodoHandler} item={todos}/>
    </div>
  );
}

export default App;
