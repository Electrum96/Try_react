import React, { useEffect, useState } from "react";
import "./pageTodo.scss";
import Container from "../components/container/Container";
import TodoBox from "../components/todo-box/TodoBox";

const PageTodo = function () {
const initState = [{id:1, title:"Title1"}, {id:2, title:"Title2"}, {id:3, title:"Title3"},{id:4, title:"Title4"}]
const [todos, setTodos] = useState(initState);

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos').then((answer) => answer.json()).then((json) =>  setTodos(json))
// }, [])

function onDelete(id) {
setTodos(todos.filter((todo) => todo.id !== id))
}

function addTodo(value){
  const newArray =todos.slice();
  newArray.push({id:newArray.length+1, title:value});
  setTodos(newArray);
  console.log(newArray);
}

  return (
  <Container>
    <TodoBox  todos={todos} onDelete={onDelete}  addTodo={addTodo} />
  </Container>)
};
export default PageTodo;
