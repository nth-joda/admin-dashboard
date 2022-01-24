import React from "react";

import "./renderUserToggle.css";

const RenderUserToggle = (props) => {
  return (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={props.user.image} alt="User avatar" />
      </div>
      <div className="topnav__right-user__name">{props.user.display_name}</div>
    </div>
  );
};

export default RenderUserToggle;
