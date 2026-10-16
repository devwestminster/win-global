import { HeroSection } from "@/components/home/hero-section";
import { SocialRail } from "@/components/home/social-rail";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
      </main>
      <SocialRail />
    </>
  );
}
