import axios from 'axios';
import useSWR, { mutate } from 'swr';
import { Task } from '../types/task';

export const useTasks = () => {
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

  return { data, error, createTask };
};
