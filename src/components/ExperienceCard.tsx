import Description from "./Description";

import { FC } from "react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  points: string[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  points,
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
    </div>
  );
};

export default ExperienceCard;
