import { useState } from "react";
import Todo from "../todo/Todo";
import "./createTodo.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const CraeteTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const randomId = Math.random().toFixed(5);
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

        <form className="inputs" onSubmit={submitFormHandler}>
          <div className="input-group">
            <Input
              className="title-input"
              input={{
                type: "text",
                placeholder: "Enter item",
                value: title,
                onChange: (e) => {
                  setTitle(e.target.value);
                },
              }}
            />
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CraeteTodo;
