import type { Project } from "./project";

export interface ProjectRepository {
  getAll(): Project[];
  getById(id: string): Project | undefined;
  getByCategory(category: Project["category"]): Project[];
}
