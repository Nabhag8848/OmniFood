import HeroImage from "../assets/img/hero.webp";
import HeroMinImage from "../assets/img/hero-min.png";
import RowProfiles from "../component/RowProfiles";
import OutlineButton from "../component/buttons/OutlineButton";
import PrimaryButton from "../component/buttons/PrimaryButton";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection} id="hero">
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
        <div className={styles.heroImagebox}>
          <picture>
            <source srcSet={HeroImage} />
            <source srcSet={HeroMinImage} />
            <img
              className={styles.heroImage}
              src={HeroMinImage}
              alt="Women Enjoying food, meals in storage container and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
