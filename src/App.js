import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";

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
        return e.id !== todo.id;
      }),
    );
  };

  const onAdd = (title, desc) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        desc,
        imp: false,
      },
    ]);
  };

  const [todos, setTodos] = useState(intiTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleImp = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, imp: !todo.imp } : todo,
      ),
    );
  };

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header title="MyTodoList" searchBar={false} />
        <main className="main-content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Todos
                  todos={todos}
                  onDelete={onDelete}
                  onAdd={onAdd}
                  toggleImp={toggleImp}
                />
              }
            />
            <Route exact path="/ContactMe" element={<ContactMe />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
