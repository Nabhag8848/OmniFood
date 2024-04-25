import Logo from "../assets/img/omnifood-logo.png";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={styles.header}>
      <a href="#">
        <img className={styles.logo} src={Logo} alt="Omnifood logo" />
      </a>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <a className={styles.navLink} href="#">
              How it works
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#">
              Meals
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className={`${styles.navLink} ${styles.navCta}`} href="#">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
