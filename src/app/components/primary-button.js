import React from "react";

const PrimaryButton = ({ text, style, click, className }) => {
  return (
    <button
      onClick={click}
      className={`flex items-center justify-center transition-all w-full outline-none px-5 py-3 font-semibold rounded-[4px] whitespace-nowrap border text-sm cursor-pointer ${
        style === "v1" &&
        "bg-primary  border-white text-white hover:bg-primary_hover active:bg-primary_pressed"
      } ${
        style === "v2" &&
        "bg-white border-secondary border-[1.5px] text-secondary hover:bg-secondary_hover hover:text-white hover:border-white active:bg-disabled"
      } ${
        style === "disabled_v1" &&
        "bg-primary_disabled border-primary_disabled text-disabled pointer-events-none  opacity-[0.5]"
      } ${className}`}>
      {text}
    </button>
  );
};

export default PrimaryButton;
