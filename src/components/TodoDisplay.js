export default function TodoDisplay({ todo, onDelete, toggleImp, onComplete }) {
  const handleDelete = () => {
    onDelete(todo);
  };

  const handleComplete = () => {
    onComplete(todo);
  };

  const handleImportant = () => {
    toggleImp(todo.id);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className={`card w-100 ${todo.completed ? "border-success" : ""}`}>
        <div className="imp-box" onClick={handleImportant}>
          <span className={`imp-star ${todo.imp ? "active" : ""}`}>★</span>
        </div>

        <div className="card-body">
          <h5
            className={`card-heading ${
              todo.completed ? "text-decoration-line-through" : ""
            }`}
          >
            {todo.title}
          </h5>

          <p
            className={`card-desc ${
              todo.completed ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            {todo.desc}
          </p>

          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-danger" onClick={handleDelete}>
              Delete
            </button>

            <button
              className={`btn btn-sm ${
                todo.completed ? "btn-secondary" : "btn-success"
              }`}
              onClick={handleComplete}
              disabled={todo.completed}
            >
              {todo.completed ? "Completed" : "Complete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
