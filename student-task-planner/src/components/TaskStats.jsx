function TaskStats({ tasks = [] }) {
  const total = tasks.length;
  const todo = tasks.filter((t) => t.status === "todo").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;
  const done = tasks.filter((t) => t.status === "done").length;

  const items = [
    { label: "Total", value: total },
    { label: "Todo", value: todo },
    { label: "In Progress", value: inProgress },
    { label: "Done", value: done },
  ];

  return (
    <div className="task-stats">
      {items.map((item) => (
        <div key={item.label} className="task-stats__item">
          <span className="task-stats__value">{item.value}</span>
          <span className="task-stats__label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskStats;
