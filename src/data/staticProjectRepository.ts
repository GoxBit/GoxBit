import type { Category, Project } from "@/core/domain";
import type { ProjectRepository } from "@/core/domain";
import raw from "./projects.json";

export class StaticProjectRepository implements ProjectRepository {
  private readonly items: Project[] = raw as Project[];

  getAll(): Project[] {
    return this.items;
  }

  getById(id: string): Project | undefined {
    return this.items.find((project) => project.id === id);
  }

  getByCategory(category: Category): Project[] {
    return this.items.filter((project) => project.category === category);
  }
}

export const projectRepository: ProjectRepository = new StaticProjectRepository();
