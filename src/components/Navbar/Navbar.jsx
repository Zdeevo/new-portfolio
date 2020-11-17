import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navBar}>
        <ul className={styles.navBarIcons}>
          <li>
            <a href="" title="Home"><FontAwesomeIcon icon="home" className={styles.icon}/></a>
            
            {/* <span className={styles.iconText}>HOME</span> */}
          </li>
          <li>
            <a href="" title="Projects"><FontAwesomeIcon icon="folder-open" className={styles.icon} /></a>
            
            {/* <span className={styles.iconText}>PROJECTS</span> */}
          </li>
          <li>
            <a href="" title="Skills"><FontAwesomeIcon icon="code" className={styles.icon} /></a>
            
            {/* <span className={styles.iconText}>SKILLS</span> */}
          </li>
          <li>
            <a href="" title="About Me"><FontAwesomeIcon icon="user-circle" className={styles.icon} /></a>
            
            {/* <span className={styles.iconText}>ABOUT</span> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
