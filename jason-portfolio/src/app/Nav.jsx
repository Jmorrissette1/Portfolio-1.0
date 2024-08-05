import styles from './page.module.css';
import Image from "next/image";

const Nav = () => {
    return(
    <div className={styles["nav-bar"]}>
        <ul>
            <li><Image src="Logo-Img.svg" alt="JM logo" width={200} height={100} /></li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
    )
  };
  
  export default Nav;