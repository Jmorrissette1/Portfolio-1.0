import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles["about-section"]}>
      <h1 className={styles.aboutH1}>Your Vision, My Mission</h1>
      <div className={styles.blueLine}></div>
      <div className={`${styles.row} ${styles.aboutContent}`}>
        <p className={styles.aboutP}>
          Hi, I&apos;m Jason Morrissette, a fun-loving, nerdy designer and
          full-stack engineer. I specialize in crafting custom web solutions
          using HTML, CSS, JavaScript, and Next.js. With a passion for blending
          creativity and technical prowess, I transform my clients&apos; visions
          into stunning and functional digital experiences. From sleek websites
          to dynamic web applications, I&apos;m dedicated to delivering
          top-notch results that exceed expectations.
        </p>
        <Image
          src="/img/JmorrissettePhoto.jpg"
          alt="Jason Morrissette"
          width={500}
          height={375}
        />
      </div>
    </div>
  );
};

export default About;
