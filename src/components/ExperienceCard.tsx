import Description from "./Description";
import { TECH_USED } from "../utils/constants";

import { FC } from "react";
import TechCard from "./TechCard";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  points: string[];
  experienceId: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  points,
  experienceId,
}) => {
  return (
    <div>
      <h4 className="pb-2">{role} </h4>
      <p className="pb-4">{`${company} ${period}`}</p>
      <ul>
        {points.map((point, index) => {
          return (
            <li key={`point-${index}`}>
              <h6>
                <Description text={point} key={`description-point-${index}`} />
              </h6>
            </li>
          );
        })}
      </ul>
      <h5 className="pt-8 pb-4">Tools used:</h5>
      <div className="flex flex-wrap gap-2">
        {TECH_USED[experienceId].map((tech, index) => {
          return (
            <TechCard
              key={`tech-${index}`}
              name={tech.name}
              iconUrl={`${tech.icon}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
