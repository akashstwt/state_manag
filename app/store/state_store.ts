
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface DataItem {
  id: number;
  completed: boolean;
  [key: string]: unknown;
}

interface DataStore {
  datas: DataItem[];
  addData: (data: DataItem) => void;
  removeData: (dataId: number) => void;
  toggleData: (dataId: number) => void;
}

const useDataStore = create<DataStore>()(
  devtools(
    persist(
      (set) => ({
        datas: [],

        addData: (data) => {
          set((state) => ({
            datas: [data, ...state.datas],
          }));
        },

        removeData: (dataId) => {
          set((state) => ({
            datas: state.datas.filter((item) => item.id !== dataId),
          }));
        },

        toggleData: (dataId) => {
          set((state) => ({
            datas: state.datas.map((item) =>
              item.id === dataId ? { ...item, completed: !item.completed } : item
            ),
          }));
        },
      }),
      { name: "data-store" }
    )
  )
);

export default useDataStore;

