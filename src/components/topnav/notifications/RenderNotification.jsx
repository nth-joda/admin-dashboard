import React from "react";

import "./renderNotification.css";

const RenderNotification = ({ item, index }) => {
  return (
    <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  );
};

export default RenderNotification;
