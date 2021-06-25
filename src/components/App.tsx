import React from 'react';
import axios from 'axios';
import useSWR, { mutate } from 'swr';
import { Task } from '../types/task';
import { Header } from './Header';
import { TaskNew } from './tasks/New';
import { TaskList } from './tasks/List';

export const App: React.FC = () => {
  const api = axios.create({
    baseURL: 'http://localhost:4000',
  });

  const fetcher = (url: string) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR<Task[], Error>('/tasks', fetcher);

  const createTask = async (task: Task) => {
    if (!data) {
      return false;
    }
    const result = await api.post<Task>('/tasks', task);
    mutate('/tasks', [...data, result.data]);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <TaskNew handleAction={createTask} />
        <TaskList data={data} error={error} />
      </div>
    </div>
  );
};
