import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className={"btn btn-info " + (props.buttoncn ? props.buttoncn : "")} data-id={props.id}>
      {props.buttontext}
      {props.children}
    </button>
  );
}
