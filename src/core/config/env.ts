function read(key: keyof ImportMetaEnv, fallback: string): string {
  const value = import.meta.env[key];
  return value?.trim() || fallback;
}

export const envConfig = {
  email: read("VITE_CONTACT_EMAIL", "Gox@Goxbit.dev"),
  artstation: read("VITE_ARTSTATION_URL", "https://www.artstation.com/gox"),
  github: read("VITE_GITHUB_URL", "https://github.com/GoxBit"),
  twitter: read("VITE_X_URL", "https://x.com/GoxBit"),
  linkedin: read("VITE_LINKEDIN_URL", "https://www.linkedin.com/in/luis-durang/"),
  siteUrl: read("VITE_SITE_URL", "https://goxbit.dev"),
} as const;
