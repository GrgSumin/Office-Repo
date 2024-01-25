import React from "react";

function Label({ name, label }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default Label;
