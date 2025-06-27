 
import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

const TaskForm: React.FC = () => {
  const { dispatch } = useTasks();
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: "ADD",
      payload: {
        id: uuidv4(),
        title: title.trim(),
        completed: false,
      },
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
