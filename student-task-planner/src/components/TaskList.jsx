function TaskList({ tasks }) {
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  if (safeTasks.length === 0) {
    return (
      <div className="empty-state card card--subtle">
        <p className="empty-state-title">No tasks yet</p>
        <p className="empty-state-text">Add your first task to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {safeTasks.map((task) => (
        <div key={task.id} className="task-item card card--subtle">
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;