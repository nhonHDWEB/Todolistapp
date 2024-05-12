import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ITask {
  id: string;
  category_id: string;
  name: string;
  completed: boolean;
}

interface IGlobalStore {
  categories: [];
  tasks: ITask[];
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      categories: [],
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useGlobalStore;
