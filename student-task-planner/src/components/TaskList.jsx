import React from 'react';
import TaskCard from './TaskCard';
import sampleTasks from '../data/tasks';

function TaskList({ tasks: tasksProp } = {}) {
  const tasks = tasksProp ?? sampleTasks;

  return (
    <div className="task-list">
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
