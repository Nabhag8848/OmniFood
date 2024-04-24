import styles from "./Pricing.module.css";
import common from "./Common.module.css";
import {
  CheckMark,
  Close,
  Infinite,
  Leaf,
  Nutrition,
  Pause,
} from "../assets/Icons";
import PrimaryButton from "../component/buttons/PrimaryButton";
import Features from "../component/Features";

function Pricing() {
  return (
    <section className={styles.section}>
      <div className={`${common.container}`}>
        <span className={`${common["sub-heading"]}`}>Pricing</span>
        <h2 className={`${common["heading-secondary"]}`}>
          Eating well without breaking the bank
        </h2>
      </div>
      <div
        className={`${common.container} ${common.grid} ${common["grid--2-cols"]} ${common["mb--medium"]}`}
      >
        <div className={`${styles.plan} ${styles.starter}`}>
          <header className={styles.header}>
            <p className={styles.name}>Starter</p>
            <p className={styles.price}>
              <span>$</span>399
            </p>
            <p className={styles.planText}>
              per month. Thats just $13 per meal!
            </p>
          </header>
          <ul className={styles.list}>
            <li className={styles.item}>
              <CheckMark />
              <span>1 meal per day</span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Order from 11am and 9pm</span>
            </li>{" "}
            <li className={styles.item}>
              <CheckMark />
              <span>Delivery is free</span>
            </li>
            <li className={styles.item}>
              <Close />
              <span>No access to latest recipes</span>
            </li>
          </ul>
          <div className={styles.signup}>
            <PrimaryButton>Start eating well</PrimaryButton>
          </div>
        </div>
        <div className={`${styles.plan} ${styles.complete}`}>
          <header className={styles.header}>
            <p className={styles.name}>Complete</p>
            <p className={styles.price}>
              <span>$</span>649
            </p>
            <p className={styles.planText}>
              per month. Thats just $11 per meal!
            </p>
          </header>
          <ul className={styles.list}>
            <li className={styles.item}>
              <CheckMark />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>{" "}
            <li className={styles.item}>
              <CheckMark />
              <span>Delivery is free</span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className={styles.signup}>
            <PrimaryButton>Start eating well</PrimaryButton>
          </div>
        </div>
      </div>
      <div className={`${common.container} ${common.grid}`}>
        <aside className={styles.details}>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <div
        className={`${common.container} ${common.grid} ${common["grid--4-cols"]}`}
      >
        {features.map((feature) => (
          <Features values={feature} />
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    title: "Never cook again!",
    text: "Our subscriptions cover 365 days per year, even including major holidays.",
    icon: <Infinite />,
  },
  {
    title: "Local and organic",
    text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
    icon: <Nutrition />,
  },
  {
    title: "No waste",
    text: "All our partners only use reusable containers to package all your meals.",
    icon: <Leaf />,
  },
  {
    title: "Pause anytime",
    text: "Going on vacation? Just pause your subscription, and we refund unused days.",
    icon: <Pause />,
  },
];

export default Pricing;
