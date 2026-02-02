export default function FilterControls({ filter, setFilter }) {
  return (
    <div className="flex gap-2">
      {["all", "active", "completed"].map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-1 rounded border ${
            filter === type ? "bg-black text-white" : ""
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
