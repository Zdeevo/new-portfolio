import React from "react";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.aboutMePage} id="aboutme">
      <h2 className={styles.aboutMeHeading}>About Me</h2>

      <div className={styles.aboutMeCard}>
        <div className={styles.subHeadingContainer}>
          <h3>Professional</h3>
        </div>
        <div className={styles.bodyContainer}>
          <h4>
            Previous role: Senior Ecologist at Nicholas Pearson Associates
          </h4>
          <ul>
            <li>
              - Management: projects, budgets, junior staff, marketing,
              sub-consultants.
            </li>
            <li>
              - Client: Project liaison, design team input, planning process
              support.
            </li>
            <li>
              - Technology: All aspects of hardware and software management for
              the team. I also co-developed an Android app to streamline data
              gathering in the field for a nationwide project with Natural
              England.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.aboutMeCard}>
        <div className={styles.subHeadingContainer}>
          <h3>Personal</h3>
        </div>
        <div className={styles.bodyContainer}>
          <p>
            I have always been interested in the practical aspects of technology
            and how it can support and enhance our everyday lives. My interest
            in electronics and making has lead me to work on a number of fun and
            challenging personal projects including a bar-top retro arcade
            machine, and a homemade drone. <br></br>
            <br></br>I believe that we have a difficult relationship with
            technology, in particular it's disposability. One of my favourite
            past-times is to re-utilise old and abandonded technology, making
            something new and useful from something considered out of date and
            'worthless'.
          </p>
        </div>
      </div>

      <div className={styles.aboutMeCard}>
        <div className={styles.subHeadingContainer}>
          <h3>Trivia</h3>
        </div>
        <div className={styles.bodyContainer}>
          <ol>
            <li>
              I have built my own 3d printer and I am currently teaching myself
              to use Fusion 360 CAD/CAM software.
            </li>
            <li>
              My 13 year old son is almost my height ... I'm 6ft 3in tall!!
            </li>
            <li>My dog is half Husky and half Jack Russell (don't ask).</li>
            <li>
              I have previously held a CAA drone pilots licence (PfCO) and
              continue to be facinated by this fast and ever evoloving
              technology, especially it's importance for remote access.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
