import React, { useMemo } from 'react';
import TaskCard from './TaskCard';
import sampleTasks from '../data/tasks';

function TaskList({ tasks: tasksProp, statusFilter = "all" } = {}) {
  const tasks = tasksProp ?? sampleTasks;

  const filteredTasks = useMemo(() => {
    if (statusFilter === "all") return tasks;
    return tasks.filter((task) => task.status === statusFilter);
  }, [tasks, statusFilter]);

  if (filteredTasks.length === 0) {
    return (
      <div className="task-list">
        <p className="task-list__empty">No tasks match the selected filter.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
