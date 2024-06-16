import { FC } from "react";

interface ToggleProps {
  title: String;
  isToggled: Boolean;
  onToggle: () => void;
}

const Toggle: FC<ToggleProps> = ({ title, isToggled, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="flex flex-col items-center cursor-pointer"
    >
      <div>{title}</div>
      <div
        className={`w-16 h-8  rounded-full
        ${isToggled ? "bg-primary" : "bg-dark-grey"}
        flex ${isToggled ? "justify-end" : "justify-start"}  
      `}
      >
        {isToggled ? (
          <div className="w-8 h-8 bg-white rounded-full"></div>
        ) : (
          <div className="w-8 h-8 bg-white rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default Toggle;
