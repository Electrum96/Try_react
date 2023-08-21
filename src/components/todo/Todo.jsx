import React from "react";
import "./todo.scss";

const Todo = function ({ title, id, onDelete }) {
  function removeTodo() {
    onDelete(id)
  }

  return (
    <div className="todo">
      <label className="todo__inner">
        <input type="checkbox" className="todo__checkbox"></input>
        <h2 className="todo__title">{title}</h2>
        <button className="todo__button" onClick={removeTodo}>
          Delete
        </button>
      </label>
    </div>
  );
};
export default Todo;
