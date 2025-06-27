import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-4 max-w-xl mx-auto">
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
