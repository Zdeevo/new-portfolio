import React from "react";
import styles from "./SkillsList.module.scss";
import SkillsCard from "../SkillsCard/SkillsCard";
import skills from "../../data/skills";

const SkillsList = () => {
  return (
    <section className={styles.skillsPage} id="skills">
        <h2 className={styles.skillsHeading}>Skills List</h2>
      <div className={styles.skillsCardGrid}>
        {skills.map((skill) => {
          return <SkillsCard skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default SkillsList;
