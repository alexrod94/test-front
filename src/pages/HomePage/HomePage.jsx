import axios from "axios";

import { useEffect, useState } from "react";
import Task from "../../components/Task/Task";

function HomePage() {
  useEffect(() => {
    getTasks();
  }, []);

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5005/api/tasks");
      setTasks(response.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5005/api/tasks/${id}`);
      getTasks();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCompleted = async (task) => {
    const newTask = {
      title: task.title,
      isCompleted: !task.isCompleted,
    };
    try {
      setLoading(true);
      await axios.put(`http://localhost:5005/api/tasks/${task._id}`, newTask);
      getTasks();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e, task, newTitle) => {
    e.preventDefault();
    const newTask = {
      title: newTitle,
      isCompleted: task.isCompleted,
    };
    try {
      setLoading(true);
      await axios.put(`http://localhost:5005/api/tasks/${task._id}`, newTask);
      getTasks();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (!loading) {
    return (
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl my-3">My Task App</h1>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                handleDelete={handleDelete}
                toggleCompleted={toggleCompleted}
                handleEdit={handleEdit}
              />
            );
          })
        ) : (
          <h2>No tasks</h2>
        )}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default HomePage;
