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
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={labelFor}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default InputType;
