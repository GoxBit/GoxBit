import { create } from "zustand";
import type { Category } from "@/core/types";

interface ProjectsState {
  activeCategories: Set<Category>;
  toggleCategory: (category: Category) => void;
  clearFilters: () => void;
  isVisible: (category: Category) => boolean;
}

export const useProjectsStore = create<ProjectsState>((set, get) => ({
  activeCategories: new Set<Category>(),
  toggleCategory: (category) =>
    set((state) => {
      const next = new Set(state.activeCategories);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return { activeCategories: next };
    }),
  clearFilters: () => set({ activeCategories: new Set<Category>() }),
  isVisible: (category) => {
    const active = get().activeCategories;
    return active.size === 0 || active.has(category);
  },
}));
