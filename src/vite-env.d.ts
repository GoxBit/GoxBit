/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_ARTSTATION_URL?: string;
  readonly VITE_GITHUB_URL?: string;
  readonly VITE_X_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
