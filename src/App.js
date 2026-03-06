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
        completed: false,
      },
    ]);
  };

  const onComplete = (todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed, imp: false } : t,
      ),
    );
  };

  const [todos, setTodos] = useState(intiTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleImp = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id && !todo.completed ? { ...todo, imp: !todo.imp } : todo,
      ),
    );
  };

  const [Filter, setFilter] = useState("all");

  const filteredTodos = (todos) => {
    switch (Filter) {
      case "important":
        return todos.filter((todo) => todo.imp);
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "pending":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
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
                  todos={filteredTodos(todos)}
                  onDelete={onDelete}
                  onAdd={onAdd}
                  toggleImp={toggleImp}
                  onComplete={onComplete}
                  filter={Filter}
                  setFilter={setFilter}
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
