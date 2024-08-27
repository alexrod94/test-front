import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const addTask = async (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      isCompleted: completed,
    };

    try {
      await axios.post("http://localhost:5005/api/tasks", newTask);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={(e) => addTask(e)}>
        <label htmlFor="title">
          Please enter your task title...
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(!completed)}
        />
        Do you want your task to be completed?
        <button type="submit" className="p-2 rounded bg-slate-600 text-white">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
