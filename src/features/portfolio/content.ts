import { envConfig } from "@/core/config/env";
import type { Tone } from "@/shared/ui";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "#featured-projects" },
  { label: "Games", href: "#featured-projects" },
  { label: "Tech Art", href: "#art-study" },
  { label: "Creative Tools", href: "#creative-tools" },
  { label: "Lab & Experiments", href: "#game-lab" },
  { label: "Devlog", href: "#devlog" },
  { label: "About", href: "#about" },
];

export const HERO = {
  badge: "Technical Designer & Technical Artist",
  roles: "Technical Designer · Technical Artist",
  description:
    "Building games, tools, technical art workflows, and gameplay systems for modern game development. Bridging software craft with game feel and artistic vision.",
  image: "/images/hero-workshop.jpg",
  crafting: "Meownster",
  craftingSuffix: " & Real-Time Toon Shaders",
  toolchain: "Unreal Engine 5 · Maya · Custom HLSL · C++",
};

export interface FlagshipBlock {
  icon: string;
  tone: Tone;
  title: string;
  body: string;
}

export interface FlagshipProject {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  engineTag: string;
  blocks: FlagshipBlock[];
  pills: string[];
  cta: string;
}

export const FLAGSHIP: FlagshipProject = {
  eyebrow: "Original Indie Production",
  title: "Meownster",
  subtitle: "Stylized Action-Adventure · Agile Cat Warrior in Ancient Overgrown Ruins",
  image: "/images/meownster.jpg",
  badge: "FLAGSHIP INDIE TITLE",
  engineTag: "Unreal Engine 5 · Gameplay Ability System",
  blocks: [
    {
      icon: "lightbulb",
      tone: "amber",
      title: "What I Wanted to Create",
      body: "A fast, fluid character combat experience with responsive dodge-cancels, tactile hit feedback, and a painterly atmospheric fantasy world reminiscent of classic action-platformers.",
    },
    {
      icon: "build",
      tone: "cyan",
      title: "Technical Solution",
      body: "Implemented custom Motion Warping with Unreal's Gameplay Ability System (GAS) for dynamic strike alignment, directional stagger states, and client-side combat prediction for snappy feel.",
    },
    {
      icon: "auto_stories",
      tone: "teal",
      title: "What's Next",
      body: "Iterating on boss encounter behavior trees, secondary magic glyph abilities, and procedural dungeon chamber layouts.",
    },
  ],
  pills: ["GAS (Gameplay Ability System)", "Motion Warping", "C++ & Blueprints", "Combat State Machine"],
  cta: "Get in Touch",
};

export interface SideProjectBullet {
  icon: string;
  tone: Tone;
  text: string;
}

export interface SideProject {
  id: string;
  title: string;
  description: string;
  tag: string;
  tagTone: Tone;
  gradient: string;
  bullets: SideProjectBullet[];
  pills: string[];
}

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: "aetheria",
    title: "Aetheria: Procedural Biome & Niagara Ecosystem",
    description:
      "An artistic environment showcase built to solve open-world dressing bottlenecks. Uses Unreal Engine 5's PCG framework to scatter bioluminescent flora based on slope and surface moisture rules.",
    tag: "Procedural World Generation",
    tagTone: "cyan",
    gradient: "linear-gradient(135deg, #0f2a2f 0%, #123a3a 40%, #2dd4bf22 100%)",
    bullets: [
      { icon: "check_circle", tone: "amber", text: "Procedural Placement: dynamic density falloff near player pathways, reducing level dressing passes by 70%." },
      { icon: "check_circle", tone: "cyan", text: "Interactive Niagara VFX: GPU particle ribbons reacting to player motion vectors and foliage displacement." },
      { icon: "check_circle", tone: "teal", text: "Painterly Shading: custom vertex wind animation with subsurface light scattering for lush vegetation." },
    ],
    pills: ["UE5 PCG Graph", "Niagara GPU Particles", "Foliage Wind Shaders"],
  },
  {
    id: "toon-shading",
    title: "Stylized Character Toon Shading & Rigging",
    description:
      "A non-photorealistic rendering study giving game artists full artistic control over lighting cutoffs, specular shapes, and silhouette outlines without fighting the PBR pipeline.",
    tag: "Technical Art & Shaders",
    tagTone: "amber",
    gradient: "linear-gradient(135deg, #2a1c33 0%, #3a1f2e 45%, #ff8a3d22 100%)",
    bullets: [
      { icon: "brush", tone: "amber", text: "Multi-Ramp Light Stepping: smooth customizable color bands for shadows, midtones, and rim highlights." },
      { icon: "brush", tone: "cyan", text: "Anisotropic Specular Highlights: stylized hair bands along custom tangent direction maps." },
      { icon: "brush", tone: "teal", text: "Depth-Aware Edge Lines: inverted hull meshes with screen-space Sobel post-processing for crisp inks." },
    ],
    pills: ["Custom HLSL", "Maya Rigging", "Toon Material Graph"],
  },
];

export interface Tool {
  icon: string;
  tone: Tone;
  name: string;
  subtitle: string;
  problem: string;
  solution: string;
  benefit: string;
  tech: string;
}

export const TOOLS: Tool[] = [
  {
    icon: "sync_alt",
    tone: "cyan",
    name: "NexusSync",
    subtitle: "Maya to Unreal Engine Live Bridge",
    problem:
      "Animators frequently lost hours manually re-exporting FBX files and fixing joint axis misalignments between Maya and UE5.",
    solution:
      "A standalone PySide6 utility listening to Maya's scene graph that pushes animations straight to Unreal's level sequence in real-time with one click.",
    benefit: "Benefit: Instant animation preview",
    tech: "Python / PySide6",
  },
  {
    icon: "tune",
    tone: "amber",
    name: "ShaderForge HUD",
    subtitle: "In-Editor Shader & Material Inspector",
    problem:
      "Tuning complex material parameters traditionally required constant swapping between the Material Graph, viewport, and content browser.",
    solution:
      "An in-viewport floating palette that detects active materials on hovered meshes, offering immediate slider control over light cutoffs, colors, and wind speeds.",
    benefit: "Benefit: 3x faster material iteration",
    tech: "UE Editor Utility",
  },
  {
    icon: "layers",
    tone: "teal",
    name: "OmniBake Batcher",
    subtitle: "High-to-Low Poly Mesh & Texture Baker",
    problem:
      "Dozens of high-poly sculpts often clogged artist machines during manual ambient occlusion, curvature, and normal map generation.",
    solution:
      "Background automation coordinating mesh decimation, Substance Designer baking templates, and automated naming conventions ready for engine ingest.",
    benefit: "Benefit: Frictionless asset pipelines",
    tech: "Substance / Python",
  },
];

export interface Experiment {
  code: string;
  tone: Tone;
  tag: string;
  title: string;
  body: string;
  focus: string;
}

export const EXPERIMENTS: Experiment[] = [
  {
    code: "LAB_EXP #01",
    tone: "cyan",
    tag: "Game Feel",
    title: "Combat Feel & Hitstop Timing",
    body: "Exploring micro-freezes (40ms to 120ms) combined with directional camera nudge and chromatic aberration on weapon impact to maximize visceral tactile punch.",
    focus: "Focus: Slashing feedback · Melee cadence",
  },
  {
    code: "LAB_EXP #02",
    tone: "amber",
    tag: "Systems",
    title: "Non-Linear XP & Economy Curves",
    body: "Mathematical modeling of level progression in Desmos & Unreal Data Tables to eliminate the mid-game leveling drought and keep stat progression rewarding.",
    focus: "Focus: Formula design · RPG balancing",
  },
  {
    code: "LAB_EXP #03",
    tone: "teal",
    tag: "Procedural",
    title: "Procedural Loot Affix Generator",
    body: "A modular C++ item generation system inspired by classic ARPGs, rolling prefix/suffix pools with dynamic rarity tints and synergy tag weighting.",
    focus: "Focus: Data-driven architecture · Fast rolling",
  },
  {
    code: "LAB_EXP #04",
    tone: "cyan",
    tag: "AI Design",
    title: "AI Stealth & Patrol Prototype",
    body: "Custom sensory perception component tracking audio stimulus radius and visual cones with three alert states: curious glance, perimeter investigation, and pursuit.",
    focus: "Focus: Behavior Trees · State transitions",
  },
  {
    code: "LAB_EXP #05",
    tone: "amber",
    tag: "Shaders",
    title: "Weekly Shader Sketches",
    body: "Short, focused material studies: caustic water reflections, comic halftone screen printing dots, vertex-displaced interactive water ripples, and fiery rune glows.",
    focus: "Focus: HLSL math · Visual exploration",
  },
];

export interface DevlogEntry {
  entry: string;
  label: string;
  tone: Tone;
  title: string;
  body: string;
}

export const DEVLOG: DevlogEntry[] = [
  {
    entry: "Devlog Entry #14",
    label: "Recent",
    tone: "cyan",
    title: "Tuning responsive combat hitpause in Blueprints & GAS",
    body: "Why global time dilation feels sluggish, and how applying custom CustomTimeDilation on only the attacker and hit target for 0.08 seconds creates that satisfying crunchy anime hitstop without breaking camera fluidity.",
  },
  {
    entry: "Devlog Entry #13",
    label: "Shader Craft",
    tone: "amber",
    title: "Authoring painterly foliage wind shaders that don't stretch meshes",
    body: "A simple trigonometric vertex offset method utilizing UV red-channel masking and world-position noise to make tree canopies sway naturally without ripping branch seams or disconnecting trunks from terrain.",
  },
  {
    entry: "Devlog Entry #12",
    label: "Creative Journey",
    tone: "teal",
    title: "From enterprise software architecture to tangible game feel",
    body: "How years of thinking in decoupled systems, event buses, and performance budgets turned out to be the ultimate superpower for building robust, modular gameplay frameworks and intuitive designer toolchains.",
  },
];

export const ABOUT = {
  bio1: "Hello! I'm Luis Durán. My path combines a rigorous software architecture background with a dedicated Master's in Game Design and Development. Rather than treating game design and code as separate disciplines, I view them as one cohesive craft: where elegant math, tactile responsiveness, and artistic stylization come together.",
  bio2: "Whether architecting a modular Gameplay Ability System foundation, authoring custom toon shaders in HLSL, or writing Maya Python automation that saves artists dozens of hours, I care deeply about project clarity, teamwork, and building fun, expressive experiences.",
  skills: [
    "Unreal Engine 5",
    "Technical Design",
    "Gameplay Systems (GAS)",
    "Modern C++",
    "Blueprints",
    "Autodesk Maya",
    "Rigging & Animation",
    "Technical Art & HLSL",
    "Python & PySide",
    "Niagara VFX",
  ],
};

export const CONTACT = {
  email: envConfig.email,
  artstation: envConfig.artstation,
  github: envConfig.github,
  twitter: envConfig.twitter,
  linkedin: envConfig.linkedin,
};
