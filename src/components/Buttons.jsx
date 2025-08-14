import React from "react";

const Buttons = ({ text, className, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Buttons;
