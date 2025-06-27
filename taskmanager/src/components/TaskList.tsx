
import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks available.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
