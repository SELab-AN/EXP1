import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import tasks from "./data/tasks";

function App() {
  return (
    <div className="app-container" id="home">
      <Header />
      
      <section className="hero card">
        <h1>Welcome to Student Task Planner</h1>
        <p>Organize your studies and manage your assignments efficiently.</p>
      </section>

      <main className="main-content">
        <section className="about-section card" id="about">
          <h2 className="section-title">About</h2>
          <p>This application helps students keep track of their daily tasks and academic deadlines.</p>
        </section>

        <section className="tasks-section card" id="tasks">
          <h2 className="section-title">Your Tasks</h2>
          <TaskForm />
          <TaskList tasks={tasks} />
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