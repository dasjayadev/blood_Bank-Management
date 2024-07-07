import React from "react";

function InputType({ labelFor, value, onChange, name, labelText, inputType }) {
  return (
    <div className="mb-3">
      <label htmlFor={labelFor}>{labelText}</label>
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
