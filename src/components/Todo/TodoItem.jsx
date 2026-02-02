export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center border p-2 rounded">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span
          className={`ml-2 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
        <span className="ml-2 text-sm text-blue-600">
          ({task.priority})
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  );
}
