import React, { useState, useEffect } from "react";
import "./pageTodo.scss";
import Container from "../components/container/Container";
import TodoBox from "../components/todo-box/TodoBox";

const PageTodo = function () { //родительский компонент
  const dataString = localStorage.getItem("data"); // получает данные 
  const initState = dataString ? JSON.parse(dataString) : []; // если данные есть парсит, если нет - возвращает пустой массив
  const [todos, setTodos] = useState(initState); // полученный выше результат присваевается в state

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todos)); // обновляет данные в localStorage если в массиве что-то поменялось
  }, [todos]);

  function onDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id)); // удаление todo, фильтрует массив данных на основании id и изменяет state
  }

  function addTodo(value) {
    const newTodo = { //формируется todo со значением пришедшим из формы
      id: window.crypto.randomUUID(), //генерация уникального id
      title: value,
      status: false, 
    };
    setTodos([newTodo, ...todos]); // изменение состояния с новым todo путем деструктуризации массива объектов
  }

  function handleCheck(id) {
    const newState = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo //если элемент найден, то изменяется статус, найденного элемента, возвращается копия массива 
    );

    setTodos(newState); //обновление состояния новым массивом
  }

  return (
    <Container>
      <TodoBox
        todos={todos}
        onDelete={onDelete}
        addTodo={addTodo}
        onCheckClick={handleCheck}
      />
    </Container>
  );
};
export default PageTodo;
