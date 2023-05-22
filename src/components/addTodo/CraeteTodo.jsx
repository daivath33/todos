import React from "react";
import Todo from "../todos/Todo";

import "./createTodo.css";
const CraeteTodo = () => {
  return (
    <div>
      <h1>THINGS TO DO</h1>
      <form action="">
        <div className="inputs">
          <input type="text" placeholder="Enter todos title" />
        </div>
        <div className="todo-group">
          <input type="checkbox" />
          <Todo title="Learn Java Script" className="todo" />
        </div>
        <div className="todo-group">
          <input type="checkbox" />
          <Todo title="Learn React" />
        </div>
        <div className="todo-group">
          <input type="checkbox" />
          <Todo title="Build a React App" />
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default CraeteTodo;
