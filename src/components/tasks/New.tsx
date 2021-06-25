import React from 'react';
import { TaskForm } from './Form';

interface IProps {
  handleAction: Function;
}

export const TaskNew: React.FC<IProps> = ({ handleAction }) => {
  return (
    <div className="new">
      <TaskForm handleAction={handleAction} />
    </div>
  );
};
