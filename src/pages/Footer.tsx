import styles from "./Footer.module.css";
import common from "./Common.module.css";

import Logo from "../assets/img/omnifood-logo.png";
import { Facebook, Instagram, Twitter } from "../assets/Icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div
        className={`${common.container} ${common.grid} ${styles["grid--footer"]}`}
      >
        <div className={styles.logoCol}>
          <a href="#" className={styles.footerLogo}>
            <img className={styles.logo} src={Logo} alt="Omnifood logo" />
          </a>
          <ul className={`${styles.socialLinks}`}>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
          </ul>
          <p className={styles.copyright}>
            Copyright &copy; 2027 by Omnifood, Inc All rights reserved
          </p>
        </div>
        <div className={styles.addressCol}>
          <p className={styles.heading}>Contact us</p>
          <address className={`${styles.contacts} ${styles.footerNav}`}>
            <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a href="tel:415-201-6370">415-201-6370</a>
              <br />
              <a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </div>
        <nav className={styles.navCol}>
          <p className={styles.heading}>Account</p>
          <ul className={styles.footerNav}>
            <li>
              <a href="#">Create account</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">iOS App</a>
            </li>
            <li>
              <a href="#">Andriod App</a>
            </li>
          </ul>
        </nav>
        <nav className={styles.navCol}>
          <p className={styles.heading}>Company</p>
          <ul className={styles.footerNav}>
            <li>
              <a href="#">About company</a>
            </li>
            <li>
              <a href="#">For Business</a>
            </li>
            <li>
              <a href="#">Cooking partners</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>
        <nav className={styles.navCol}>
          <p className={styles.heading}>Resources</p>
          <ul className={styles.footerNav}>
            <li>
              <a href="#">Recipe Directory</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Privacy & terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
