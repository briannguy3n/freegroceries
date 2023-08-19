import React from "react";

const NavItem = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className={`text-xl text-white`}>{props.icon}</div>
      <p className="text-white uppercase font-semibold text-xs">{props.title}</p>
    </div>
  );
};

export default NavItem;
