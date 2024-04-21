import HeroImage from "../assets/img/hero.png";
import RowProfiles from "../component/RowProfiles";
import OutlineButton from "../component/buttons/OutlineButton";
import PrimaryButton from "../component/buttons/PrimaryButton";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <div className={styles.heroTextBox}>
          <h1 className={styles.headingPrimary}>
            A healthy meal delivered to your door, every single day
          </h1>
          <p className={styles.heroDescription}>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <PrimaryButton>Start eating well</PrimaryButton>
          <OutlineButton>Learn more &darr;</OutlineButton>
          <RowProfiles />
        </div>
        <div className="hero-image-box">
          <img
            className={styles.heroImage}
            src={HeroImage}
            alt="Women Enjoying food, meals in storage container and food bowls on a table"
          />
        </div>
      </div>
    </section>
  );
}
