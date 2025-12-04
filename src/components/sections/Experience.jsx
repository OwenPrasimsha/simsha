import ExperienceList from "../common/ExperienceList";
import TechStack from "../common/TechStack";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-[80px] lg:py-[120px] px-4 max-w-[1180px] mx-auto"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience</h2>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Experience with</h3>

      <TechStack />

      <h3 className="text-xl font-bold text-gray-900 mb-8">
        Professional timeline
      </h3>

      <ExperienceList />
    </section>
  );
}
