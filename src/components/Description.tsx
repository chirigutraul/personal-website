import { RED_WORDS } from "../utils/constants";
import AccentText from "./AccentText";

const Description = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word) => {
        if (!RED_WORDS[word]) return `${word} `;
        return <AccentText text={`${word} `} />;
      })}
    </>
  );
};

export default Description;
