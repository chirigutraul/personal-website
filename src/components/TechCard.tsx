import { FC } from "react";

interface TechCardProps {
  name: string;
  iconUrl: string;
}

const TechCard: FC<TechCardProps> = ({ name, iconUrl }) => {
  return (
    <div className="flex flex-col items-center w-fit">
      <img src={iconUrl} alt={name} className="w-10 h-10" />
      <p>{name}</p>
    </div>
  );
};

export default TechCard;
