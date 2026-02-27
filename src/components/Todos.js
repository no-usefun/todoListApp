import TodoItems from "./TodoDisplay";
import TodoAdd from "./todoAdd";

export default function Todos({ todos, onDelete, onAdd }) {
  const passTodo = todos.map((todo) => (
    <TodoItems key={todo.id} todo={todo} onDelete={onDelete} />
  ));

  const checkEmpty = () => {
    return todos.length === 0 ? (
      <p className="text-center">No todos to display!</p>
    ) : null;
  };

  return (
    <div className="todos" style={{ minHeight: "85vh", padding: "20px" }}>
      <TodoAdd onAdd={onAdd} />
      <h3 className="text-center">Todos List</h3>
      {checkEmpty() || passTodo}
    </div>
  );
}
