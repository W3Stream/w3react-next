import React, { useContext, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import ISidebarProps from "./model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faBuffer,
  faGithub,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { SidebarItem } from "..";

const Sidebar: React.FC<ISidebarProps> = ({ parent }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarMain}>
        {parent === "normal" && (
          <>
            <SidebarItem href="home">
              <span className={styles.sidebarItemIcon}>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Home</span>
            </SidebarItem>
            <SidebarItem href="subscription">
              <span className={styles.sidebarItemIcon}>
                <FontAwesomeIcon icon={faBuffer} />
              </span>
              <span>Subscriptions</span>
            </SidebarItem>
          </>
        )}
        {parent === "creator" && (
          <>
            <div className={styles.sidebarItemTop}>
              <div className={styles.sidebarChannelItem}>
                <img
                  src="https://yt3.ggpht.com/a/AATXAJzODVlKqFzmj5RWCTPEkL_yEPupQnIpY-75rYTSJg=s88-c-k-c0x00ffffff-no-rj"
                  alt="channel icon"
                  className={styles.channelIcon}
                />
              </div>
              <div className={styles.sidebarChannelItem}>
                <h4 className={styles.sidebarChannelItemTitle}>Your channel</h4>
                <h5 className={styles.sidebarChannelItemSubtitle}>
                  Whatever name
                </h5>
                <h5 className={styles.sidebarChannelItemSubtitle}>
                  12k Subscribers
                </h5>
              </div>
            </div>
            <SidebarItem href="dashboard">
              <span>Dashboard</span>
            </SidebarItem>
            <SidebarItem href="customtoken">
              <span>Custom Token</span>
            </SidebarItem>
          </>
        )}
      </div>
      <div className={styles.sidebarFooter}>
        <div className={styles.sidebarFooterItem}>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className={styles.sidebarFooterItem}>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className={styles.sidebarFooterItem}>
          <FontAwesomeIcon icon={faDiscord} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
