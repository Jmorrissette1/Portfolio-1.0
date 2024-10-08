import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return(
    <div className={styles["nav-bar"]}>
        <ul className={styles["nav-list"]}>
            <li><Image src="Logo-Img.svg" alt="JM logo" width={120} height={100} /></li>
            <li className={styles["nav-item"]}><Link href="#about">About</Link></li>
            <li className={styles["nav-item"]}><Link href="#projects">Projects</Link></li>
            <li className={styles["nav-item"]}><Link href="#contact">Contact</Link></li>
            <li className={styles["nav-item"]}>
                <ul className={styles["social-box"]}>
                    <li className={styles["social-icon"]}><a href="https://github.com/Jmorrissette1"><Image src="Git-Hub-Black.svg" alt="Github Logo" width={40} height={40}/></a></li>
                    <li className={styles["social-icon"]}><a href="https://www.linkedin.com/in/jasonmorrissette/"><Image src="LinkedIn-Black.svg" alt="Github Logo" width={40} height={40}/></a></li>
                    <li className={styles["social-icon"]}><a href="https://x.com/JasonMorrisset8"><Image src="X-black.svg" alt="Github Logo" width={40} height={40}/></a></li>
                </ul>
            </li>
        </ul>
    </div>
    )
  };
  
  export default Nav;