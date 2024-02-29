import { useContext, useState } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
        <input
          type="text"
          name="taskName"
          id="taskName"
          placeholder="Task name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2" 
          autoFocus
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          name="taskDescription"
          id="taskDescription"
          cols="30"
          rows="10"
          className="bg-slate-300 p-3 w-full mb-2" 
          value={description}
        ></textarea>
        <button className="bg-indigo-500 p-3 w-full mb-2">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
