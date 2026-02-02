import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import FilterControls from "./FilterControls";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
        priority,
      },
    ]);
    setText("");
    setPriority("Medium");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-4">
      <h2 className="text-lg font-bold">Todo App</h2>

      <form onSubmit={addTask} className="flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Enter task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          className="border p-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button className="bg-black text-white px-4 rounded">
          Add
        </button>
      </form>

      <FilterControls filter={filter} setFilter={setFilter} />

      <div className="space-y-2">
        {filteredTasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
