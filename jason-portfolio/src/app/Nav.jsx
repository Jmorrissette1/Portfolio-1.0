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
            <li className={styles["nav-item"]}>
                <ul className={styles["social-box"]}>
                    <li className={styles["social-icon"]}><Image src="Git-Hub-Black.svg" alt="Github Logo" width={40} height={40}/></li>
                    <li className={styles["social-icon"]}><Image src="LinkedIn-Black.svg" alt="Github Logo" width={40} height={40}/></li>
                    <li className={styles["social-icon"]}><Image src="X-black.svg" alt="Github Logo" width={40} height={40}/></li>
                </ul>
            </li>
        </ul>
    </div>
    )
  };
  
  export default Nav;