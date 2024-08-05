import styles from './page.module.css';

const Nav = () => {
    return(
    <div className={styles["nav-bar"]}>
        <ul>
            <li>JM Devs</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contatct</li>
        </ul>
    </div>
    )
  };
  
  export default Nav;