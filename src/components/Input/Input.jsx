/* eslint-disable no-unused-vars */
import React, { useId } from "react";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ label, type = "text", className = "", onChange, ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && (
          <label className="inline-bloc mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          onChange={onChange}
          {...props}
          id={id}
          className={`
        ${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:lg-gray-50 duration-200 border border-gray-200 w-full `}
        />
      </div>
    );
  }
);

export default Input;
