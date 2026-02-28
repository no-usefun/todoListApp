export default function TodoItems({ todo, onDelete, toggleImp }) {
  const callOnDelete = () => {
    onDelete(todo);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card w-100">
        <div className="imp-box" onClick={() => toggleImp(todo.id)}>
          <span className={`imp-star ${todo.imp ? "active" : ""}`}>★</span>
        </div>
        <div className="card-body">
          <h5 className="card-heading">{todo.title}</h5>
          <p className="card-desc">{todo.desc}</p>
          <button className="btn btn-sm btn-danger " onClick={callOnDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
