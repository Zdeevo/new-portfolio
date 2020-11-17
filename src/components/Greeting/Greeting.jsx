import React from "react";
import styles from "./Greeting.module.scss";
import profilePic from "../../assets/img/profile-pic-greyscale.jpg"

const Greeting = () => {
  return (
    <section className={styles.greetingMain} id="greeting">
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
      </div>
    </section>
  );
};

export default Greeting;
