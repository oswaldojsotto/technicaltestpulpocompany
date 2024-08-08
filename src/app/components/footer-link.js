import React from "react";

const FooterLink = ({ id, text, href }) => {
  return (
    <a
      className="text-[11px] font-normal whitespace-nowrap w-min  underline text-white"
      role="navigation"
      key={id}
      href={href}
      target="_blank">
      {text}
    </a>
  );
};

export default FooterLink;
