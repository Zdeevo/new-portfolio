import React from "react";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.aboutMePage} id="aboutme">
      <h2 className={styles.aboutMeHeading}>About Me</h2>

      <div className={styles.aboutMeCard}>
        <h3>Professional</h3>
          <h4>
            Previous role: Senior Ecologist at Nicholas Pearson Associates
          </h4>
          <h5>
            Relevant skills:
          </h5>
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


        <div className={styles.aboutMeCard}>
          <h4>
            Personal
          </h4>
          <p>
            I have always been interested in the practical aspects of technology
            and how it can support and enhance our everyday lives. My interest in
            electronics and making has lead me to work on a number of fun and
            challenging personal projects including a bar-top retro arcade
            machine, and a homemade drone. Before buying a commercial one, I also
            built a fully functional film projector out of an old overhead
            projector and a vga monitor.
          </p>
        </div>

      <div className={styles.aboutMeCard}>
        <h4>
          Trivia
        </h4>
        <div>
          <ol>
            <li>I built my own 3d printer.</li>
            <li>
              My 13 year old son is almost my height ... I'm 6ft 3in tall!!
            </li>
            <li>My dog is half Husky and half Jack Russell (don't ask).</li>
            <li>I have a drone pilots licence (PfCO).</li>
          </ol>
        </div> 
      </div>

    </section>
  );
};

export default AboutMe;
