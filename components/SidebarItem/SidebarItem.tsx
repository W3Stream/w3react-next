import React, { useContext, useEffect } from "react";
import styles from "./SidebarItem.module.scss";
import { useRouter } from "next/router";

const SidebarItem: React.FC<any> = ({ children, href }) => {
  const router = useRouter();
  const className =
    router.pathname.indexOf(href) !== -1
      ? styles.selectedSidebarItem
      : styles.sidebarItem;
  return <div className={className}>{children}</div>;
};

export default SidebarItem;
