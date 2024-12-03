import React from "react";

function InputType({ labelFor, value, onChange, name, labelText, inputType, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={labelFor} className="form-label">
        {labelText}
      </label>
      <input
        type={inputType}
        value={value}
        name={name}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}

export default InputType;