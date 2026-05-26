import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import TaskStatusFilter from "./components/TaskStatusFilter";
import TaskStats from "./components/TaskStats";
import sampleTasks from "./data/tasks";

function App() {
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="app-container" id="home">
      <Header />

      <section className="hero">
        <h1>Welcome to Student Task Planner</h1>
        <p>Organize your studies and manage your assignments efficiently.</p>
      </section>

      <main className="main-content">
        <section className="about-section" id="about">
          <h2>About</h2>
          <p>This application helps students keep track of their daily tasks and academic deadlines.</p>
        </section>

        <section className="tasks-section" id="tasks">
          <h2>Your Tasks</h2>
          <TaskStatusFilter value={statusFilter} onChange={setStatusFilter} />
          <TaskStats tasks={sampleTasks} />
          <AddTaskForm />
          <TaskList tasks={sampleTasks} statusFilter={statusFilter} />
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Student Task Planner - SE Lab Team (Nima & Abolfazl)</p>
        <p className="footer-note">This app is deployed using GitHub Pages.</p>
      </footer>
    </div>
  );
}

export default App;
