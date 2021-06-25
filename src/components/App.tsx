import React from 'react';
import { Header } from './Header';
import { TaskNew } from './tasks/New';
import { TaskList } from './tasks/List';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <TaskNew />
        <TaskList />
      </div>
    </div>
  );
};
