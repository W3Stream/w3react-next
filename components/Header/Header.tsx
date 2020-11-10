import React from "react";
import styles from "./Header.module.scss";
import IHeaderProps from "./model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <span className={styles.menuIcon}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <h2 className={styles.logo}>W3Stream.</h2>
      </div>
      <div className={styles.rightContainer}>
        <button className={styles.signInButton}>
          <span className={styles.signInIcon}>
          <FontAwesomeIcon icon={faUserCircle} />
          </span>
          <span>Sign In</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
