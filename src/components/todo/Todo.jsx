import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./todo.scss";


const Todo = function ({ title, id, onDelete, onCheckClick }) {
  

  function removeTodo() {
    onDelete(id)
  }

  function editTodo() {
  }

  function checkTodo(){

    onCheckClick(id)

  }

  

  return (
    <div className="todo">
      <label className="todo__inner">
        <input type="checkbox" className="todo__checkbox" onChange={checkTodo} ></input>
        <span className="todo__custom-checkbox"></span>
        <h2 className="todo__title">{title}</h2>
        <div className="todo__btn-wrp">
        <button className="todo__button-edit" onClick={editTodo}>
          <EditIcon/>
        </button>
        <button className="todo__button" onClick={removeTodo}>
          <DeleteOutlineIcon/>
        </button>
        </div>
      </label>
    </div>
  );
};
export default Todo;
