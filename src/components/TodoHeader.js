export default function TodoHeader({ filter, setFilter }) {
  const filters = [
    { key: "all", label: "All" },
    { key: "important", label: "Important" },
    { key: "completed", label: "Completed" },
    { key: "pending", label: "Pending" },
  ];

  return (
    <nav className="d-flex justify-content-between align-items-center mb-3">
      <h3 className="text-white fw-bold">Todos</h3>

      <div className="filter-bar d-flex gap-2">
        {filters.map((f) => (
          <button
            aria-pressed={filter === f.key}
            key={f.key}
            className={`btn btn-sm btn-outline-light ${
              filter === f.key ? "active" : ""
            }`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
