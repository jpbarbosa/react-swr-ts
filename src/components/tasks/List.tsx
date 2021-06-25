import React from 'react';
import { TaskItem } from './Item';
import { Task } from '../../types/task';

interface IProps {
  data?: Task[];
  error?: Error;
  handleUpdateTask: Function;
  handleRemoveTask: Function;
}

export const TaskList: React.FC<IProps> = ({
  data,
  error,
  handleUpdateTask,
  handleRemoveTask,
}) => {
  if (error) return <div className="error">{error.message}</div>;
  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="list">
      <ul>
        {data?.map((task) => (
          <li key={task.id}>
            <TaskItem
              task={task}
              handleUpdateTask={handleUpdateTask}
              handleRemoveTask={handleRemoveTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
