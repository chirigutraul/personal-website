import { FC } from "react";

interface LoaderProps {
  size: "small" | "medium" | "large";
}

const Loader: FC<LoaderProps> = ({ size }) => {
  let diameter = "w-2";

  switch (size) {
    case "small":
      diameter = "w-6 h-6";
      break;
    case "medium":
      diameter = "w-8 h-8";
      break;
    case "large":
      diameter = "w-10 h-10";
      break;
  }

  return (
    <div className="border-l-2 rounded-full border-medium-grey animate-spin">
      <div className={`${diameter} h-6`}></div>
    </div>
  );
};

export default Loader;
