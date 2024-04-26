import styles from "./FeatureStep.module.css";
import common from "./Common.module.css";
import { v4 as uuidv4 } from "uuid";

const ProductImages: Array<string> = Object.values(
  import.meta.glob("@assets/img/app/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

function FeatureStep() {
  return (
    <section className={`${styles.section}`} id="featurestep">
      <div className={`${common.container}`}>
        <span className={`${common["sub-heading"]}`}>How it works</span>
        <h2 className={`${common["heading-secondary"]}`}>
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div
        className={`${common.container} ${common.grid} ${common["grid--2-cols"]}`}
      >
        {steps.map((step, index) => (
          <FeatureBox values={{ ...step, index }} key={uuidv4()} />
        ))}
      </div>
    </section>
  );
}

function FeatureBox({
  values,
}: {
  values: {
    step: string;
    heading: string;
    description: string;
    alt: string;
    index: number;
  };
}) {
  const { step, heading, description, index, alt } = values;
  return (
    <>
      {index % 2 === 0 && (
        <div className={`${styles["step-text-box"]}`}>
          <p className={`${styles["step-number"]}`}>{step}</p>
          <h3 className={`${styles["heading-tertiary"]}`}>{heading}</h3>
          <p className={`${styles["step-description"]}`}>{description}</p>
        </div>
      )}
      <div className={`${styles["step-image-box"]}`}>
        <img
          className={`${styles["step-img"]}`}
          src={ProductImages[index]}
          alt={alt}
        />
      </div>
      {index % 2 !== 0 && (
        <div className={`${styles["step-text-box"]}`}>
          <p className={`${styles["step-number"]}`}>{step}</p>
          <h3 className={`${styles["heading-tertiary"]}`}>{heading}</h3>
          <p className={`${styles["step-description"]}`}>{description}</p>
        </div>
      )}
    </>
  );
}

const steps = [
  {
    step: "01",
    heading: "Tell us what you like (and what not)",
    description: `Never again waste time thinking about what to eat! Omnifood AI will
    create a 100% personalized weekly meal plan just for you. It makes
    sure you get all the nutrients and vitamins you need, no matter what
    diet you follow!`,
    alt: "IPhone App preferences selection screen",
  },
  {
    step: "02",
    heading: "Approve your weekly meal plan",
    description: `Once per week, approve the meal plan generated for you by Omnifood
    AI. You can change ingredients, swap entire meals, or even add your
    own recipes.`,
    alt: "IPhone App meal approving plan screen",
  },
  {
    step: "03",
    heading: "Receive meals at convenient time",
    description: `Best chefs in town will cook your selected meal every day, and we
    will deliver it to your door whenever works best for you. You can
    change delivery schedule and address daily!`,
    alt: "IPhone App delivery screen",
  },
];

export default FeatureStep;
