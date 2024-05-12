import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskType } from '../utils/type';
import uuid from 'react-native-uuid';
interface IGlobalStore {
  tasks: TaskType[];
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
  markDoneTask: (id: string) => void;
  editTask: (item: TaskType) => void;
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (title: string) => {
        const newTask: TaskType = {
          id: uuid.v4(),
          title,
          isFinished: false,
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },
      deleteTask: (id: string) => {
        set((state) => {
          const updatedTasks = state.tasks.filter((t) => t.id !== id);
          return {
            tasks: updatedTasks.length > 0 ? updatedTasks : [],
          };
        });
      },
      markDoneTask: (id: string) => {
        set((state) => ({
          tasks: state.tasks.map((t) => {
            return t.id !== id ? t : { ...t, isFinished: !t.isFinished };
          }),
        }));
      },
      editTask: (item: TaskType) => {
        set((state) => ({
          tasks: state.tasks.map((t) => {
            return t.id !== item.id ? t : { ...t, title: item.title };
          }),
        }));
      },
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useGlobalStore;
