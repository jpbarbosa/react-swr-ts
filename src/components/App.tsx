import React from 'react';
import { Header } from './Header';
import { TaskList } from './tasks/List';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
};
