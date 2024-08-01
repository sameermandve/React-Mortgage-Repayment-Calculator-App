import { forwardRef, useRef } from "react";
import "../index.css";

const InputField = forwardRef(
  (
    { label, type, step, name, required, errors, inputLabel, ...props },
    ref
  ) => {
    let inputContainerStyles = `flex ${name === "amount" ? `flex-row-reverse` : `flex-row`} items-center border-2 border-solid rounded-md hover:cursor-pointer group ${errors ? `border-errorRed focus-within:border-errorRed` : `border-customSlate-500 hover:border-lime focus-within:border-lime`}`;

    let inputSpanStyles = `h-full font-bold  bg-customSlate-100  px-5 py-3  shrink-0 ${name === "amount" ? `rounded-l` : `rounded-r`} ${name === "years" ? `lg:max-xl:px-3 xl:px-4` : ``} ${errors ? `text-white bg-errorRed peer-focus:bg-errorRed peer-focus:text-white group-hover:bg-errorRed group-hover:text-white` : `text-customSlate-700 bg-customSlate-100 peer-focus:bg-lime peer-focus:text-customSlate-900 group-hover:bg-lime group-hover:text-customSlate-900`}`;

    return (
      <div className="flex flex-col mb-6">
        <label
          className="mb-2 font-semibold text-customSlate-700"
          htmlFor={name}
        >
          {label}
        </label>
        <div className={inputContainerStyles}>
          <input
            {...props}
            type={type}
            ref={ref}
            step={step}
            id={name}
            name={name}
            className="w-full px-2 py-2 text-lg font-bold rounded-md peer border-spacing-0 outline-0 text-customSlate-900 hover:cursor-pointer removeArrow"
          />
          <span className={inputSpanStyles}>{inputLabel}</span>
        </div>
        {errors}
      </div>
    );
  }
);

export default InputField;
