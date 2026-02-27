import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }),
    );
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

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy groceries.",
    },
    {
      id: 2,
      title: "Go to the park",
      desc: "You need to go to the park to get some fresh air.",
    },
    {
      id: 3,
      title: "Go to the gym",
      desc: "You need to go to the gym to stay fit.",
    },
  ]);

  return (
    <>
      <Header title="MyTodoList" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} onAdd={onAdd} />
      <Footer />
    </>
  );
}

export default App;
