function TaskStatusFilter({ value = "all", onChange } = {}) {
  const options = [
    { value: "all", label: "All" },
    { value: "todo", label: "Todo" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" },
  ];

  function handleSelect(nextValue) {
    if (typeof onChange === "function") {
      onChange(nextValue);
    }
  }

  return (
    <div className="task-status-filter" role="group" aria-label="Task status filter">
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            className={isActive ? "filter-btn is-active" : "filter-btn"}
            aria-pressed={isActive}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default TaskStatusFilter;
