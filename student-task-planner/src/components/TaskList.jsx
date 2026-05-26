import React from 'react';
import TaskCard from './TaskCard';
import sampleTasks from '../data/tasks';

function TaskList({ tasks: tasksProp } = {}) {
  const tasks = tasksProp ?? sampleTasks;
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
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
