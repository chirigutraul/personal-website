import { EXPERIENCES } from "../utils/constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div id="experience">
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
  );
};

export default Experience;
