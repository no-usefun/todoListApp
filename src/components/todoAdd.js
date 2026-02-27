import { useState } from "react";

export default function TodoAdd({ onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Description cannot be empty!");
      return;
    }
    onAdd(title, desc);
    setTitle("");
    setDesc("");
  }

  return (
    <div className="container my-3">
      <h3 className="text-center">Add a Todo Task</h3>
      <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label htmlFor="text" className="visually-hidden">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputText"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="Desc" className="visually-hidden">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDesc"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-sm btn-outline-primary mb-3">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
