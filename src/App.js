import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  let intiTodos = [];
  if (localStorage.getItem("todos") === null) {
    intiTodos = [];
  } else {
    intiTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }),
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onAdd = (title, desc) => {
    let id = todos.length + 1;
    const myTodo = {
      id: id,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(intiTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <Header title="MyTodoList" searchBar={false} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Todos todos={todos} onDelete={onDelete} onAdd={onAdd} />}
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
