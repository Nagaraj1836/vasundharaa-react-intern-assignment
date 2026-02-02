import { useState } from "react";

export default function SearchList() {
  const names = [
    "Gowtham",
    "Goutham Yadav",
    "Suresh Kumar",
    "Ramesh",
    "Mahesh",
    "Ganesh",
    "Rajesh",
    "Gowtham Teja",
  ];

  const [query, setQuery] = useState("");

  const highlight = (text) => {
    if (!query) return text;
    return text.split(new RegExp(`(${query})`, "gi")).map((p, i) =>
      p.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="font-bold text-blue-600">{p}</span>
      ) : p
    );
  };

  const filtered = names.filter(n =>
    n.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-3">
      <h2 className="text-lg font-bold">Live Search</h2>

      <input
        placeholder="Search..."
        className="border p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p className="text-sm">Results: {filtered.length}</p>

      {filtered.length === 0 ? (
        <p className="text-red-500">No matches found</p>
      ) : (
        filtered.map((n, i) => (
          <div key={i} className="border p-2 rounded">
            {highlight(n)}
          </div>
        ))
      )}
    </div>
  );
}
