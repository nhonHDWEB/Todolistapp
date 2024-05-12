import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskType } from '../utils/type';
import uuid from 'react-native-uuid';
interface IGlobalStore {
  tasks: TaskType[];
  numberOfTaskFinished: () => number;
  numberTask: () => number;
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
  markDoneTask: (id: string) => void;
  editTask: (item: TaskType) => void;
  getFilterTask: (searchQuery: string) => void;
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      numberOfTaskFinished: () => {
        return get().tasks.filter((t) => t.isFinished).length;
      },
      numberTask: () => {
        return get().tasks.length;
      },
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
      getFilterTask: (searchQuery: string) => {
        const filterTask = get().tasks;
        return filterTask.filter((t) => {
          if (!searchQuery) {
            return true;
          }
          return t.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim());
        });
      },
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useGlobalStore;
