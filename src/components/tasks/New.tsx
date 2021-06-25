import React from 'react';
import { TaskForm } from './Form';
import { useActiveTask } from '../../contexts/ActiveTask';

interface IProps {
  handleAction: Function;
}

export const TaskNew: React.FC<IProps> = ({ handleAction }) => {
  const { activeTask, setActiveTask } = useActiveTask();

  return (
    <div className="new">
      {activeTask && activeTask.id === undefined ? (
        <TaskForm handleAction={handleAction} activeTask={activeTask} />
      ) : (
        <button className="bt-new" onClick={() => setActiveTask({ name: '' })}>
          New Task
        </button>
      )}
    </div>
  );
};
