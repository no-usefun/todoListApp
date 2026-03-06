import TodoDisplay from "./TodoDisplay";
import TodoHeader from "./TodoHeader";
import TodoAdd from "./todoAdd";

export default function Todos({
  todos,
  onDelete,
  onAdd,
  toggleImp,
  onComplete,
  Filter,
  setFilter,
}) {
  const passTodo = todos.map((todo) => (
    <TodoDisplay
      key={todo.id}
      todo={todo}
      onDelete={onDelete}
      toggleImp={toggleImp}
      onComplete={onComplete}
    />
  ));

  const checkEmpty = () => {
    return todos.length === 0 ? (
      <p className="text-center mt-5 text-white ">You are all caught up!</p>
    ) : null;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <div
        className="glass-card p-4 w-100 d-flex flex-column"
        style={{ maxWidth: "1100px", height: "600px" }}
      >
        <TodoAdd onAdd={onAdd} />
        <div className="container todo-scroll">
          <TodoHeader filter={Filter} setFilter={setFilter} />
          <div className="row g-4 justify-content-center">
            {checkEmpty() || passTodo}
          </div>
        </div>
      </div>
    </div>
  );
}
