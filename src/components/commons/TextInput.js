import React from "react";

const TextInput = (props) => {
  let wrapperClass = "form-group";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          value={props.value}
        ></input>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default TextInput;
