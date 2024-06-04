import { FC } from "react";

interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  fieldName: string;
  setFormValues: (fieldName: string, value: string) => void;
  validationError?: string;
}

const Input: FC<InputProps> = ({
  type,
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
      <input
        type={type}
        className="w-full h-full p-4 bg-medium-grey placeholder:text-white placeholder:text-xl rounded-xl"
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
export default Input;
