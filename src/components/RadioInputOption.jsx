import { forwardRef } from "react";

const RadioInputOption = forwardRef(
  ({ label, name, type, id, required, value, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className=" mt-2 border-2  border-solid border-customSlate-500 rounded-md px-4 py-2 hover:border-lime hover:bg-alphaLime  has-[:checked]:bg-alphaLime has-[:checked]:border-lime mb-2  text-lg text-customSlate-900 font-bold"
      >
        <input
          {...props}
          type={type}
          name={name}
          ref={ref}
          id={id}
          value={value}
          className="mr-3 w-4 h-4"
        />
        <span>{label}</span>
      </label>
    );
  }
);

export default RadioInputOption;
