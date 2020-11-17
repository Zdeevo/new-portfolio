import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navBar}>
        <ul className={styles.navBarIcons}>
          <li>
            <Link
              activeClass="active"
              to="greeting"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <FontAwesomeIcon icon="home" className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <FontAwesomeIcon icon="folder-open" className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <FontAwesomeIcon icon="code" className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <FontAwesomeIcon icon="user-circle" className={styles.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
