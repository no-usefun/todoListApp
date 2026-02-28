export default function TodoItems({ todo, onDelete }) {
  const callOnDelete = () => {
    onDelete(todo);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card todo-card w-100">
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
          <button className="btn btn-sm btn-danger" onClick={callOnDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
