import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import tasks from "./data/tasks";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;