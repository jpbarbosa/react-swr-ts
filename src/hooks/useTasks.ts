import axios from 'axios';
import useSWR from 'swr';
import { Task } from '../types/task';

export const useTasks = (callback?: Function) => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const fetcher = (url: string) => api.get(url).then((res) => res.data);

  const { data, error, mutate } = useSWR<Task[], Error>('/tasks', fetcher, {
    onSuccess: (data, key) => {
      if (callback) callback();
    },
  });

  const createTask = async (task: Task) => {
    if (!data) {
      return false;
    }
    const result = await api.post<Task>('/tasks', task);
    mutate([...data, result.data]);
  };

  const updateTask = async (task: Task) => {
    if (!data) {
      return false;
    }
    const { data: updatedTask } = await api.patch<Task>(
      `/tasks/${task.id}`,
      task
    );
    mutate(
      data.map(
        (task) => (task.id === updatedTask.id ? updatedTask : task),
        false
      )
    );
  };

  const removeTask = async (task: Task) => {
    if (!data) {
      return false;
    }
    await api.delete<Task>(`/tasks/${task.id}`);
    mutate(data.filter((item) => item.id === task.id, false));
  };

  return { data, error, createTask, updateTask, removeTask };
};
