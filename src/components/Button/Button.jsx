import React from "react";

const Button = ({ text, src, icon: Icon, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {Icon && <Icon />}
      {text && <span>{text}</span>}
      {src && <img src={src} alt="" />}
    </button>
  );
};

export default Button;
