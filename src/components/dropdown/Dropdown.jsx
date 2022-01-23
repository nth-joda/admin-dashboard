import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <button className="dropdown__toggle">
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Dropdown;
