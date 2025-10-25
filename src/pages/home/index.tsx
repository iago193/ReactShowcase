import SkillsSection from "./skill-section";
import MyWork from "./my-work-section";
import Hero from "./hero-section";
import MyProject from "./my-projects";

export default function Home() {
  return (
    <main className="xl:w-[70%] w-[100%] md:mx-auto border-2 border-amber-100 overflow-x-hidden">
      <Hero />
      <MyWork />
      <SkillsSection />
      <MyProject />
    </main>
  );
}
