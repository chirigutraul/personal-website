import { FC } from "react";

interface TextAreaProps {
  label: string;
  placeholder: string;
  fieldName: string;
  value: string;
  setFormValues: (fieldName: string, value: string) => void;
  validationError?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  placeholder,
  fieldName,
  value,
  setFormValues,
  validationError,
}) => {
  const changeFormValues = (value: string) => {
    setFormValues(fieldName, value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label>
        <h6>{label}</h6>
      </label>
      <textarea
        name="message"
        className="w-full min-h-[20ch] p-4 bg-medium-grey placeholder:text-white placeholder:text-xl rounded-xl"
        placeholder={placeholder}
        onChange={({ target: { value } }) => changeFormValues(value)}
        value={value}
      />
      {validationError && (
        <span>
          <p className="text-red-500">{validationError}</p>
        </span>
      )}
    </div>
  );
};
export default TextArea;
