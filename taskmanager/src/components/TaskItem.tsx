 
import React from "react";
import { useTasks } from "../context/TaskContext";
import type { Task } from "../types/task";

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const { dispatch } = useTasks();

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch({ type: "TOGGLE", payload: task.id })}
          className="mr-3"
        />
        <span
          className={`text-lg ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => dispatch({ type: "DELETE", payload: task.id })}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
};

export default TaskItem;
