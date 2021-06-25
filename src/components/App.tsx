import React from 'react';
import { Header } from './Header';
import { TaskNew } from './tasks/New';
import { TaskList } from './tasks/List';
import { useTasks } from '../hooks/useTasks';

export const App: React.FC = () => {
  const { data, error, createTask } = useTasks();

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
