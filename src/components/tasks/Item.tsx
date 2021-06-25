import React from 'react';
import { TaskForm } from './Form';
import { Task } from '../../types/task';
import { useActiveTask } from '../../contexts/ActiveTask';

interface IProps {
  task: Task;
  handleUpdateTask: Function;
  handleRemoveTask: Function;
}

export const TaskItem: React.FC<IProps> = ({
  task,
  handleUpdateTask,
  handleRemoveTask,
}) => {
  const { activeTask, setActiveTask } = useActiveTask();

  return (
    <>
      {activeTask && activeTask.id === task.id ? (
        <TaskForm handleAction={handleUpdateTask} activeTask={activeTask} />
      ) : (
        <div className="item">
          <span onClick={() => setActiveTask(task)}>{task.name}</span>
          <button className="bt-remove" onClick={() => handleRemoveTask(task)}>
            X
          </button>
        </div>
      )}
    </>
  );
};
