import { FC } from "react";

interface TextAreaProps {
  label: string;
  placeholder: string;
  fieldName: string;
  setFormValues: (fieldName: string, value: string) => void;
  validationError?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  placeholder,
  fieldName,
  setFormValues,
  validationError,
}) => {
  const changeFormValues = (value: string) => {
    console.log("Field name:", fieldName);
    console.log("Event value:", value);
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
