export default function TodoItems({ todo, onDelete }) {
  const callOnDelete = () => {
    onDelete(todo);
  };

  return (
    <div className="todo">
      <div className="todo-left">
        <h4>
          {todo.id}. {todo.title}
        </h4>
        <p>{todo.desc}</p>
      </div>
      <div className="todo-right">
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={callOnDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
