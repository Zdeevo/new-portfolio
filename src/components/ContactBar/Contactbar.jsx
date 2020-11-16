import React from "react";
import styles from "./ContactBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contactbar = () => {
  return (
    <div>
      <nav className={styles.contactBar}>
        <ul className={styles.contactBarIcons}>
          <li>
            <a href="mailto:semaguire75@gmail.com">
              <FontAwesomeIcon icon="envelope" className={styles.icon} />
              <span className={styles.iconText}>EMAIL</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/steve-maguire-a5a8926a"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className={styles.icon}
              />
              <span className={styles.iconText}>LINKEDIN</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Zdeevo"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "github-square"]}
                className={styles.icon}
              />
              <span className={styles.iconText}>GITHUB</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Contactbar;
