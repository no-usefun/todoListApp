import TodoItems from "./TodoDisplay";
import TodoAdd from "./todoAdd";

export default function Todos({ todos, onDelete, onAdd }) {
  const passTodo = todos.map((todo) => (
    <TodoItems key={todo.id} todo={todo} onDelete={onDelete} />
  ));

  const checkEmpty = () => {
    return todos.length === 0 ? (
      <p className="text-center mt-5 text-white ">No todos to display!</p>
    ) : null;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div
        className="glass-card p-4 w-100"
        style={{ maxWidth: "1100px", minHeight: "600px" }}
      >
        <TodoAdd onAdd={onAdd} />
        <h3 className="text-center mt-5 text-white">Todos List</h3>
        <div className="row g-4 justify-content-center">
          {checkEmpty() || passTodo}
        </div>
      </div>
    </div>
  );
}
