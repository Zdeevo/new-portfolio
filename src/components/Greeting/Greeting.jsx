import React from "react";
import styles from "./Greeting.module.scss";
import ContactMe from "../ContactMe/ContactMe";
import profilePic from "../../assets/img/profile-pic-greyscale.jpg"

const Greeting = () => {
  return (
    <section className={styles.greetingMain}>
      <div className={styles.greetingBox}>
        <div>
          <img
            src={profilePic}
            alt="my face"
            className={styles.profilePic}
          />
        </div>
        <h1 className={styles.greeting1}>Hi I'm</h1>
        <h1 className={styles.greeting2}>Steve Maguire</h1>
        <h1 className={styles.greeting3}>Junior Software Developer</h1>
        <ContactMe />
      </div>
    </section>
  );
};

export default Greeting;
