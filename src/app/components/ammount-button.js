import React from "react";

const AmmountButton = ({ text, click, selected = false }) => {
  return (
    <button
      onClick={click}
      className={` transition-all w-full h-12 font-semibold text-black rounded-md active:bg-primary_pressed bg-primary_20 
        text-md hover:bg-primary_hover hover:text-white ${
          selected ? "bg-primary_pressed text-white" : ""
        }`}>
      {text}
    </button>
  );
};

export default AmmountButton;
