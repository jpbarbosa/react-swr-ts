import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import { ActiveTaskStore } from './contexts/ActiveTask';
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <ActiveTaskStore>
      <App />
    </ActiveTaskStore>
  </React.StrictMode>,
  document.getElementById('root')
);
