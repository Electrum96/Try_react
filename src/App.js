import React from "react";
import "./style/style.scss";
import PageTodo from "./page/PageTodo";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <PageTodo/>
    </div>
  );
}

export default App;
