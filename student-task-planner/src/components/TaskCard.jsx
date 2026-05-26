import React from 'react';
import './TaskCard.css';

function TaskCard({ task }) {
  if (!task) return null;

  const { title, description, status, priority } = task;

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3 className="task-card-title">{title}</h3>
        <span className={`task-badge status-${status?.toLowerCase().replace(/\s+/g, '-')}`}>
          {status}
        </span>
      </div>

      {description && (
        <p className="task-card-description">{description}</p>
      )}

      <div className="task-card-footer">
        <div className="task-priority-wrapper">
          <span className="task-priority-label">Priority:</span>
          <span className={`task-badge priority-${priority?.toLowerCase()}`}>
            {priority}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
