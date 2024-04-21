import Logo from "../assets/img/omnifood-logo.png";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Omnifood logo" />
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <a className={styles.navLink} href="#">
              Section 1
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#">
              Section 2
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#">
              Section 3
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#">
              Section 4
            </a>
          </li>
          <li>
            <a className={`${styles.navLink} ${styles.navCta}`} href="#">
              Section 5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
