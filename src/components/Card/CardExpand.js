import React from "react";

const CardExpand = ({ method, display }) => {
  const className = `card-expand card-expand--${display ? "show" : "hide"}`;
  return <div className={className}>{method}</div>;
};

export default CardExpand;
