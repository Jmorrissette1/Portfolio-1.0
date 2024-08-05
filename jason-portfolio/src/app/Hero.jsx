import styles from "./page.module.css";

const Hero = () => {
    return(
    <div className={styles["hero-section"]}>
    <h1 className={styles["hero-h1"]}>Jason Morrissette</h1>
    <h3 className={styles["hero-h3"]}>Software Engineer</h3>
    </div>
    )
  };
  
  export default Hero;