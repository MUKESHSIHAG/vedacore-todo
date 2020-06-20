import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >    
      <input type="checkbox" className="check-box" onClick={() => completeTodo(index)}/>{todo.text}
        {/* <button onClick={() => completeTodo(index)}>Complete</button> */}
        <button className="remove-item" onClick={() => removeTodo(index)}>x</button>
    </div>
  );
}

function TodoForm({ addTodo, removeAllTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>Create new task</label><br></br>
        <div className="input-field">
          <textarea
            type="text"
            className="input"
            value={value}
            cols="30"
            rows="3"
            placeholder="Write Task..."
            onChange={e => setValue(e.target.value)}
          />
          <button className="submit-btn" onSubmit={handleSubmit}>+</button>
        </div>
      </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Test it by adding more To-Do",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    // console.log(newTodos[index].isCompleted);
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeAllTodo = () => {
    const newTodo = [];
    // console.log(newTodo.length);
    setTodos(newTodo);
  }
  
  return (
    <div className="app">
      <div className="left-side">
        <h3>Khalon</h3>
        <center><p>We create cutting edge tech for human collaboration</p></center>
      </div>
      <div className="todo-list">
        <div className="top-bar">
           <span>To-Do List </span>
          <button className="clear-all" onClick={() => removeAllTodo()}>Clear List</button>
        </div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} removeAllTodo={removeAllTodo}/>
      </div>
    </div>
  );
}

export default App;