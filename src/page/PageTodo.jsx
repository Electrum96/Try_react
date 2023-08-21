import React, { useState } from "react";
import "./pageTodo.scss";
import Container from "../components/container/Container";
import TodoBox from "../components/todo-box/TodoBox";

const PageTodo = function () {
const initState = [{id:1, title:"Title1"}, {id:2, title:"Title2"}, {id:3, title:"Title3"},{id:4, title:"Title4"}]
const [todos, setTodos] = useState(initState);

function onDelete(id) {
setTodos(todos.filter((todo) => todo.id !== id))
}


  return (
  <Container>
    <TodoBox  todos={todos} onDelete={onDelete}/>
  </Container>)
};
export default PageTodo;
