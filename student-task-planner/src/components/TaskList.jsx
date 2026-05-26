function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item card card--subtle">
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;