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
      <h4>{role} </h4>
      <h5>{`${company} ${period}`}</h5>
      <ul>
        {points.map((point, index) => {
          return (
            <li key={`point-${index}`}>
              <h6>
                <Description text={point} />
              </h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
