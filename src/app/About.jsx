import styles from './page.module.css';
import Image from "next/image";

const About = () => {
    return(
      <div className={styles["about-section"]}>
        <h1 className={styles["about-h1"]}>Your Vision, My Mission</h1>
     </div>
    )
  };
  
  export default About;