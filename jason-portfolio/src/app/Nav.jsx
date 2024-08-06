import styles from './page.module.css';
import Image from "next/image";

const Nav = () => {
    return(
    <div className={styles["nav-bar"]}>
        <ul className={styles["nav-list"]}>
            <li><Image src="Logo-Img.svg" alt="JM logo" width={120} height={100} /></li>
            <li className={styles["nav-item"]}>About</li>
            <li className={styles["nav-item"]}>Projects</li>
            <li className={styles["nav-item"]}>Contact</li>
            <li className={styles["nav-item"]}>Social Links</li>
        </ul>
    </div>
    )
  };
  
  export default Nav;