import { useState } from "react";

function AddTaskForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // UI-only: no persistence yet.
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <div className="add-task-form__row">
        <label className="add-task-form__label" htmlFor="taskTitle">
          Title
        </label>
        <input
          id="taskTitle"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Finish math assignment"
        />
      </div>

      <div className="add-task-form__row">
        <label className="add-task-form__label" htmlFor="taskDescription">
          Description
        </label>
        <textarea
          id="taskDescription"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Add a short note (optional)"
          rows={3}
        />
      </div>

      <div className="add-task-form__grid">
        <div className="add-task-form__row">
          <label className="add-task-form__label" htmlFor="taskStatus">
            Status
          </label>
          <select
            id="taskStatus"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="todo">To do</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="add-task-form__row">
          <label className="add-task-form__label" htmlFor="taskPriority">
            Priority
          </label>
          <select
            id="taskPriority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="add-task-form__actions">
        <button type="submit">Add Task (UI only)</button>
      </div>
    </form>
  );
}

export default AddTaskForm;
