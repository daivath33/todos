import "./Todo.css";

const Todo = ({ title, onClick }) => {
  return (
    <div className="todo">
      <h3>{title}</h3>
      <button onClick={onClick}>x</button>
    </div>
  );
};

export default Todo;
