import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navBar}>
        <ul className={styles.navBarIcons}>
          <li>
            <FontAwesomeIcon icon="home" className={styles.icon} />
            <span className={styles.iconText}>HOME</span>
          </li>
          <li>
            <FontAwesomeIcon icon="folder-open" className={styles.icon} />
            <span className={styles.iconText}>PROJECTS</span>
          </li>
          <li>
            <FontAwesomeIcon icon="code" className={styles.icon} />
            <span className={styles.iconText}>SKILLS</span>
          </li>
          <li>
            <FontAwesomeIcon icon="user-circle" className={styles.icon} />
            <span className={styles.iconText}>ABOUT</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
