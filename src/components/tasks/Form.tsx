import React from 'react';
import { Task } from '../../types/task';
import { useForm } from '../../hooks/useForm';

export const TaskForm: React.FC = () => {
  const { formState, handleChange, handleSubmit } = useForm<Task>({ name: '' });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Task description"
      />
      <input type="submit" />
    </form>
  );
};
