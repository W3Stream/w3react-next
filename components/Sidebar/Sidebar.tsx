import React, { useContext, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import ISidebarProps from "./model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";
import { StateContext, ActionContext } from "../../hooks";
import { IStateModel, IActionModel } from "../../model/hooks.model";

const Sidebar: React.FC<ISidebarProps> = () => {
  
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarItemIcon}>
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span>Home</span>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarItemIcon}>
          <FontAwesomeIcon icon={faBuffer} />
        </span>
        <span>Subscriptions</span>
      </div>
    </aside>
  );
};

export default Sidebar;
