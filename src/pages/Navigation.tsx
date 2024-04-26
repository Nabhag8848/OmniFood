import { useState } from "react";
import { Menu, NavClose } from "../assets/Icons";
import Logo from "../assets/img/omnifood-logo.png";
import styles from "./Navigation.module.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`${styles.header} ${isOpen && styles.navOpen}`}>
      <a href="#">
        <img className={styles.logo} src={Logo} alt="Omnifood logo" />
      </a>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <a
              className={styles.navLink}
              href="#featurestep"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              className={styles.navLink}
              href="#meals"
              onClick={() => setIsOpen(false)}
            >
              Meals
            </a>
          </li>
          <li>
            <a
              className={styles.navLink}
              href="#testimonials"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className={styles.navLink}
              href="#pricing"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className={`${styles.navLink} ${styles.navCta}`}
              href="#cta"
              onClick={() => setIsOpen(false)}
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.mobileNav} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <NavClose /> : <Menu />}
      </button>
    </header>
  );
}

export default Navigation;
