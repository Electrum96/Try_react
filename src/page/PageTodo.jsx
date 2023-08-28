import React, {useState } from "react";
import "./pageTodo.scss";
import Container from "../components/container/Container";
import TodoBox from "../components/todo-box/TodoBox";

const PageTodo = function () {
const initState = [{id:1, title:"Title1"}, {id:2, title:"Title2"}, {id:3, title:"Title3"},{id:4, title:"Title4"}, {id:5, title:"Title5"}, {id:6, title:"Title6"}, {id:7, title:"Title7"}, {id:8, title:"Title8"},{id:9, title:"Title9"}, {id:10, title:"Title10"}]
const [todos, setTodos] = useState(initState);

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos').then((answer) => answer.json()).then((json) =>  setTodos(json))
// }, [])

function onDelete(id) {
setTodos(todos.filter((todo) => todo.id !== id))
}

function addTodo(value){
  const newArray =todos.slice();
  newArray.unshift({id:newArray.length+1, title:value});
  setTodos(newArray);
  console.log(newArray);
}

  return (
    <div className="container">
  <Container>
    <TodoBox  todos={todos} onDelete={onDelete}  addTodo={addTodo} />
  </Container>
  </div>)
};
export default PageTodo;
