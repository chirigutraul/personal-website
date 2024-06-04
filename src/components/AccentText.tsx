import { FC } from "react";

interface AccentTextProps {
  text: string;
}

const AccentText: FC<AccentTextProps> = ({ text }) => {
  return <span className="text-secondary">{text}</span>;
};

export default AccentText;
