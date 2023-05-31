import React, { useState } from "react";
import Todo from "../todos/Todo";
import "./createTodo.css";

const CraeteTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  let randomId;

  const submitFormHandler = () => {
    randomId = Math.random().toFixed(5);
    setTitle(title);
    setTodos((prevTodos) => [...prevTodos, { id: randomId, title: title }]);
    setTitle("");
  };

  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <div className="container">
        {todos.length > 0 && <h2>You have {todos.length} Todos</h2>}
        {todos.length === 0 && <h2>You have any Todos</h2>}
        {todos.map((td) => (
          <Todo
            key={td.id}
            title={td.title}
            onClick={() => deleteTodoHandler(td.id)}
          />
        ))}

        <form
          className="inputs"
          onSubmit={(e) => {
            e.preventDefault();
            submitFormHandler();
          }}
        >
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter item"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CraeteTodo;
