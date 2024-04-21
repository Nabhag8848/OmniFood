import styles from "./FeatureStep.module.css";
import common from "./Common.module.css";

function FeatureStep() {
  return (
    <section className={`${styles.section}`}>
      <div
        className={`${common.container} ${common.grid} ${common["grid--2-cols"]}`}
      ></div>
    </section>
  );
}

export default FeatureStep;
