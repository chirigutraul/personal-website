import { FC } from "react";
import { COMPONENTS } from "../utils/constants";

import { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  size: "small" | "medium" | "large";
  type: "primary" | "secondary" | "gradient-1" | "gradient-2" | "gradient-3";
  disabled?: boolean;
}

/**
 * Button component.
 *
 * @param {string} props.text - The text to display on the button.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @param {string} props.size - The size of the button ( "small" | "medium" | "large").
 * @param {string} props.type - The type of the button ("primary" | "secondary" | "gradient-1" | "gradient-2" | "gradient-3").
 * @returns {JSX.Element} Button component
 */
const Button: FC<ButtonProps> = ({
  text,
  onClick,
  size,
  type,
  disabled = false,
}) => {
  const buttonPadding = COMPONENTS.BUTTON.PADDING[size];
  const buttonColor = COMPONENTS.BUTTON.COLORS[type];

  const getButtonText = (size: string, text: string): JSX.Element | null => {
    switch (size) {
      case "small":
        return <h6>{text}</h6>;
      case "medium":
        return <h5>{text}</h5>;
      case "large":
        return <h4>{text}</h4>;
      default:
        return null;
    }
  };

  return (
    <button
      disabled={disabled}
      className={`${buttonColor} ${buttonPadding} rounded-full`}
      onClick={onClick}
    >
      {getButtonText(size, text)}
    </button>
  );
};

export default Button;
