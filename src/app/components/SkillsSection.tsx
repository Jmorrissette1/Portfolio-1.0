import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./SkillsSection.module.css";
import Image from "next/image";

const SkillsSection: React.FC = () => {
  return (
    <section className={styles.contentSection}>
      <h2 className={styles.skillsH1}>Skills</h2>
      <div className={styles.blueLine}></div>
      <ul className={`${styles.row} ${styles.skillsList}`}>
        <li className={styles.skillsIcon}>
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "#ec322d" }}
            width={75}
            height={75}
          />
        </li>
        <li className={styles.skillsIcon}>
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "#ec322d" }}
            width={75}
            height={75}
          />
        </li>
        <li className={styles.skillsIcon}>
          <FontAwesomeIcon
            icon={faJs}
            style={{ color: "#ec322d" }}
            width={75}
            height={75}
          />
        </li>
        <li className={styles.skillsIcon}>
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#ec322d" }}
            width={75}
            height={75}
          />
        </li>
        <li className={styles.skillsIcon}>
          <FontAwesomeIcon
            icon={faNodeJs}
            style={{ color: "#ec322d" }}
            width={75}
            height={75}
          />
        </li>
        <li className={styles.skillsIcon}>
          <FontAwesomeIcon
            icon={faGitAlt}
            style={{ color: "#ec322d" }}
            width={75}
            height={75}
          />
        </li>
      </ul>
    </section>
  );
};

export default SkillsSection;
