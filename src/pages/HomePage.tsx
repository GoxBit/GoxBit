import {
  AboutStudio,
  ContactSection,
  CreativeLab,
  CreativeTools,
  Devlog,
  FeaturedProjects,
  HeroSection,
  SiteFooter,
  SiteHeader,
} from "@/features/portfolio";

export function HomePage() {
  return (
    <div id="top" className="min-h-dvh bg-canvas text-ink-text">
      <SiteHeader />
      <main className="w-full pt-20">
        <HeroSection />
        <FeaturedProjects />
        <CreativeTools />
        <CreativeLab />
        <Devlog />
        <AboutStudio />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
