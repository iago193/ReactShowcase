import SkillsSection from "./skill-section";
import MyWork from "./my-work-section";
import Hero from "./hero-section";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <MyWork />
      <SkillsSection />
    </main>
  );
}
