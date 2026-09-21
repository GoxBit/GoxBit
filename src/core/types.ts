export type Vec2 = { x: number; y: number };

export type Category =
  | "game-design"
  | "technical-design"
  | "systems-design"
  | "gameplay-design"
  | "technical-art"
  | "shader-experiments"
  | "unreal-engine"
  | "ai-tooling";

export type NodeState = "idle" | "hover" | "focused" | "expanded";

export interface GameDesignFacet {
  coreLoop?: string;
  playerMotivation?: string;
  riskReward?: string;
  progression?: string;
  replayability?: string;
  technicalChallenges?: string;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  challenges: string[];
  learnings: string[];
}

export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  year: number;
  thumbnail: string;
  summary: string;
  description: string;
  tags: string[];
  position: Vec2;
  tools: string[];
  caseStudy: CaseStudy;
  gameDesign?: GameDesignFacet;
  media: MediaItem[];
  links: ProjectLink[];
}
