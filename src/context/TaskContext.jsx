import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: task.title,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
