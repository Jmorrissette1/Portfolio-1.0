import styles from './page.module.css';
import Image from "next/image";

const Projects = () => {
    return(
    <div className={styles["featured-project-section"]}>
        <h1>Featured Project</h1>
        <div ClassName={styles["featured-project-card"]}>
           <Image src='/img/Klean-Freak-Img.png' alt ="project 1 image" width={1200} height={600}></Image> 
        </div>
    </div>
    )
  };
  
  export default Projects;