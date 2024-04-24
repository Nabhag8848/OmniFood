import styles from "./Pricing.module.css";
import common from "./Common.module.css";
import { CheckMark, Close } from "../assets/Icons";
import PrimaryButton from "../component/buttons/PrimaryButton";

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
        className={`${common.container} ${common.grid} ${common["grid--2-cols"]}`}
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
    </section>
  );
}

export default Pricing;
