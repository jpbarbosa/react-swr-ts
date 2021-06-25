import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { TaskItem } from './Item';
import { Task } from '../../types/task';

export const TaskList: React.FC = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR<Task[], Error>(
    'http://localhost:4000/tasks',
    fetcher
  );

  if (error) return <div className="error">{error.message}</div>;
  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="list">
      <ul>
        {data?.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
