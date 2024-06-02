type AccentTextProps = {
  text: string;
};

const AccentText = ({ text }: AccentTextProps) => {
  return <span className="text-secondary">{text}</span>;
};

export default AccentText;
