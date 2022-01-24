import React from "react";
import { Link } from "react-router-dom";

const renderUserMenu = (props) => {
  return (
    <Link to="/" key={props.index}>
      <div className="notification-item">
        <i className={props.item.icon}></i>
        <span>{props.item.content}</span>
      </div>
    </Link>
  );
};

export default renderUserMenu;
