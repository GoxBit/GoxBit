import type { Project } from "@/core/types";
import raw from "./projects.json";

export const projects: Project[] = raw as Project[];

export const projectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);
