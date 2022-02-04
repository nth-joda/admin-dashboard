import React from "react";
import { Link } from "react-router-dom";

import "./topnav.css";

import Dropdown from "../dropdown/Dropdown";
import ThemeMenu from "../thememenu/ThemeMenu";
import RenderNotification from "./notifications/RenderNotification";
import RenderUserToggle from "./user/RenderUserToggle";
import RenderUserMenu from "./user/RenderUserMenu";

import notifications from "../../assets/JsonData/notification.json";
import user_image from "../../assets/images/user_avatar.png";
import user_menu from "../../assets/JsonData/user_menus.json";

const curr_user = {
  display_name: "NTH - Joda",
  image: user_image,
};

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Type to search..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* TODO: Dropdown */}
          <Dropdown
            customToggle={() => <RenderUserToggle user={curr_user} />}
            contentData={user_menu}
            renderItems={(item, index) => (
              <RenderUserMenu item={item} index={index} key={index} />
            )}
          />
        </div>
        <div className="topnav__right-item">
          {/* TODO: Dropdown */}
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => (
              <RenderNotification item={item} index={index} key={index} />
            )}
            renderFooter={() => <Link to="/">View all</Link>}
          />
        </div>
        <div className="topnav__right-item">
          {/* TODO: Theme settings */}
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
