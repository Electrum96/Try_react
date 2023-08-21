import React from "react";
import './todoBox.scss';
import Todo from "../todo/Todo";

const TodoBox = function({todos, onDelete}) {

    return <div className="todo-box">
        {todos.map((todo) => <Todo onDelete={onDelete} key={todo.id} id={todo.id} title={todo.title}/>)}
        </div>

}

export default TodoBox;