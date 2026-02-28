import TodoItems from "./TodoDisplay";
import TodoAdd from "./todoAdd";

export default function Todos({ todos, onDelete, onAdd, toggleImp }) {
  const passTodo = todos.map((todo) => (
    <TodoItems
      key={todo.id}
      todo={todo}
      onDelete={onDelete}
      toggleImp={toggleImp}
    />
  ));

  const checkEmpty = () => {
    return todos.length === 0 ? (
      <p className="text-center mt-5 text-white ">No todos to display!</p>
    ) : null;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 120px);" }}
    >
      <div
        className="glass-card p-4 w-100 d-flex flex-column"
        style={{ maxWidth: "1100px", height: "600px" }}
      >
        <TodoAdd onAdd={onAdd} />
        <h3 className="text-center mt-5 text-white">Todos List</h3>
        <div className="container todo-scroll">
          <div className="row g-4 justify-content-center">
            {checkEmpty() || passTodo}
          </div>
        </div>
      </div>
    </div>
  );
}
