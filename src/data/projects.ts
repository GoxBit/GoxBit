import type { Project } from "@/core/domain";
import { projectRepository } from "./staticProjectRepository";

export { projectRepository } from "./staticProjectRepository";

export const projects: Project[] = projectRepository.getAll();

export const projectById = (id: string): Project | undefined =>
  projectRepository.getById(id);
