import { createContext, useReducer, useContext, useEffect, type ReactNode } from "react";
import type { Task } from "../types/task";

type Action =
  | { type: "ADD"; payload: Task }
  | { type: "DELETE"; payload: string }
  | { type: "TOGGLE"; payload: string };

const TaskContext = createContext<{
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const reducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter(task => task.id !== action.payload);
    case "TOGGLE":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within TaskProvider");
  return context;
};

export { TaskProvider, useTasks };
