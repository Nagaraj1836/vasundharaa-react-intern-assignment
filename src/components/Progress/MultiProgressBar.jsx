import { useState } from "react";

export default function MultiProgressBar() {
  const [values, setValues] = useState([30, 50, 70]);

  const update = (i, v) => {
    const num = Math.min(100, Math.max(0, Number(v) || 0));
    const arr = [...values];
    arr[i] = num;
    setValues(arr);
  };

  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  const color = (v) =>
    v < 40 ? "bg-red-500" : v > 70 ? "bg-green-500" : "bg-yellow-400";

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-3">
      <h2 className="text-lg font-bold">Progress Bar</h2>

      {values.map((v, i) => (
        <input
          key={i}
          type="number"
          value={v}
          onChange={(e) => update(i, e.target.value)}
          className="border p-2"
        />
      ))}

      <div className="h-5 bg-gray-200 rounded overflow-hidden">
        <div
          className={`h-full ${color(avg)} transition-all`}
          style={{ width: `${avg}%` }}
        />
      </div>

      {values.map((v, i) => (
        <div key={i} className="h-3 bg-gray-200 rounded overflow-hidden">
          <div
            className={`h-full ${color(v)} transition-all`}
            style={{ width: `${v}%` }}
          />
        </div>
      ))}

      <p className="text-sm">Average: {Math.round(avg)}%</p>
    </div>
  );
}
