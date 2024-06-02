import Description from "./Description";

const ExperienceCard = ({
  role,
  company,
  period,
  points,
}: {
  role: string;
  company: string;
  period: string;
  points: string[];
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
