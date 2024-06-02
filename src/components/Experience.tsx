import { EXPERIENCES } from "../utils/constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="px-8 text-white bg-gradient-to-b from-black to-light-grey md:px-16"
    >
      <h1>Experience</h1>
      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((experience, index) => {
          return (
            <ExperienceCard
              key={`experience-${index}`}
              role={experience.role}
              company={experience.company}
              period={experience.period}
              points={experience.points}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
