import styles from "./Meals.module.css";
import common from "./Common.module.css";
import MealImg1 from "../assets/img/meals/meal-1.jpg";
import MealImg2 from "../assets/img/meals/meal-2.jpg";
import { CheckMark, Flame, Restaurant, Star } from "../assets/Icons";

function Meals() {
  return (
    <section className={styles.section} id="meals">
      <div className={`${common.container} ${common["center-text"]}`}>
        <span className={`${common["sub-heading"]}`}>Meals</span>
        <h2 className={`${common["heading-secondary"]}`}>
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div
        className={`${common.container} ${common.grid} ${common["grid--3-cols"]} ${common["mb--medium"]}`}
      >
        <div className={styles.meal}>
          <img
            className={styles["meal-image"]}
            src={MealImg1}
            alt="Japanese Gyozas"
          />
          <div className={styles.content}>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles["tag--veg"]}`}>
                Vegetarian
              </span>
            </div>
            <p className={styles["meal-title"]}>Japanese Gyozas</p>
            <ul className={styles["meal-attributes"]}>
              <li className={styles.attribute}>
                <Flame />
                <span>
                  <strong>650 </strong>Calories
                </span>
              </li>
              <li className={styles.attribute}>
                <Restaurant />
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className={styles.attribute}>
                <Star />
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.meal}>
          <img
            className={styles["meal-image"]}
            src={MealImg2}
            alt="Avocado Salad"
          />
          <div className={styles.content}>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles["tag--vegan"]}`}>
                Vegan
              </span>
              <span className={`${styles.tag} ${styles["tag--paleo"]}`}>
                Paleo
              </span>
            </div>
            <p className={styles["meal-title"]}>Avocado Salad</p>
            <ul className={styles["meal-attributes"]}>
              <li className={styles.attribute}>
                <Flame />
                <span>
                  <strong>400 </strong>Calories
                </span>
              </li>
              <li className={styles.attribute}>
                <Restaurant />
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className={styles.attribute}>
                <Star />
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.diets}>
          <h3 className={`${styles["heading-tertiary"]}`}>
            Works with any diet:
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <CheckMark />
              <span>Vegetarian</span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Vegan </span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Pescatarian</span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Gluten-free </span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Lactose-free</span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Keto </span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Paleo</span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Low FODMAP </span>
            </li>
            <li className={styles.item}>
              <CheckMark />
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${common.container} ${styles.recipes}`}>
        <a className={common.link} href="#">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;
