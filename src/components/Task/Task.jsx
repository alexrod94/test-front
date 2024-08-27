import { useState } from "react";

function Task({ task, handleDelete, toggleCompleted, handleEdit }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  return (
    <div className="flex flex-row justify-between items-center border border-1 rounded border-black p-3 my-2 bg-slate-400 text-white">
      {!task.isCompleted ? (
        <p>{task.title}</p>
      ) : (
        <p className="text-slate-700 line-through">{task.title}</p>
      )}

      {editing && (
        <form onSubmit={(e) => handleEdit(e, task, newTitle)}>
          <input
            type="text"
            className="text-black"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button type="submit">Change task</button>
        </form>
      )}

      <div className="flex flex-row justify-between items-center">
        <button
          className="mr-2 hover:text-slate-700"
          onClick={() => setEditing(!editing)}
        >
          Edit
        </button>
        <button
          className="mr-2 hover:text-slate-700"
          onClick={() => toggleCompleted(task)}
        >
          {!task.isCompleted ? "Mark as Completed" : "Mark as Pending"}
        </button>
        <button
          className="mr-2 hover:text-slate-700"
          onClick={() => handleDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
