import React from "react";

const Todo = ({ title, description, className }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Todo;
