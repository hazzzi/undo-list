import { create } from 'zustand'

export interface UndoItem {
  id: string
  text: string
  isCompleted: boolean
  createdAt: Date
}

interface UndoStore {
  items: UndoItem[]
  addItem: (text: string) => void
  toggleItem: (id: string) => void
  removeItem: (id: string) => void
  clearCompleted: () => void
}

export const useUndoStore = create<UndoStore>((set) => ({
  items: [],
  
  addItem: (text: string) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: Date.now().toString(),
          text: text.trim(),
          isCompleted: false,
          createdAt: new Date(),
        },
      ],
    })),
  
  toggleItem: (id: string) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      ),
    })),
  
  removeItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  
  clearCompleted: () =>
    set((state) => ({
      items: state.items.filter((item) => !item.isCompleted),
    })),
})) 