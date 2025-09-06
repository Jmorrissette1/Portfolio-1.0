import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles["about-section"]}>
      <h1 className={styles.aboutH1}>Your Vision, My Mission</h1>
      <div className={styles.blueLine}></div>
      <div className={`${styles.row} ${styles.aboutContent}`}>
       <div className ={styles.aboutText}>
        <p className={styles.aboutP}>
         Hi, I’m Jason Morrissette — a full-stack engineer and cybersecurity enthusiast who thrives at the intersection of design, development, and defense. With 12+ years in IT and 5+ years in software development, I’ve transitioned from supporting healthcare systems and networks to designing custom web applications and strengthening them against real-world threats.
        </p>
        <p className={styles.aboutP}>
          I specialize in building tailored solutions with Next.js, Tailwind, and Supabase/PostgreSQL, while weaving in application security and DevSecOps practices. In my home lab, I explore vulnerability scanning with Tenable, penetration testing with TryHackMe, and secure coding exercises that directly inform how I approach production-ready builds.
        </p>
        <p className={styles.aboutP}>I’ve also had the opportunity to train over 120 healthcare staff on technology and cybersecurity basics — an experience that reinforced my belief that security should be practical, approachable, and built into everything we do. My mission is simple: deliver digital experiences that are sleek, performant, and resilient under attack.</p>
        <p className={styles.aboutP}>When I’m not coding or breaking things in my lab, you’ll find me spending time with the family, experimenting with new recipes in the kitchen, or planning my next travel adventure. Let’s connect and build something great together!</p>
        </div>
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
