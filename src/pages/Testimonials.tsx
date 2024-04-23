import styles from "./Testimonials.module.css";
import common from "./Common.module.css";

import TestimonialCard from "../component/TestimonialCard";

import DaveProfile from "../assets/img/customers/dave.jpg";
import BenProfile from "../assets/img/customers/ben.jpg";
import HannahProfile from "../assets/img/customers/hannah.jpg";
import SteveProfile from "../assets/img/customers/steve.jpg";

import { v4 as uuidv4 } from "uuid";

const testimonials = [
  {
    profile: DaveProfile,
    alt: "Dave Profile",
    text: `Inexpensive, healthy and great-tasting meals, without even having to
        order manually! It feels truly magical`,
    name: "Dave Bryson",
  },
  {
    profile: BenProfile,
    alt: "Ben Profile",
    text: `The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!`,
    name: "Ben Hadley",
  },
  {
    profile: SteveProfile,
    alt: "Steve Profile",
    text: `Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!`,
    name: "Steve Miller",
  },
  {
    profile: HannahProfile,
    alt: "Hannah Profile",
    text: `I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.`,
    name: "Hannah Smith",
  },
];

const FoodImages: Array<string> = Object.values(
  import.meta.glob("@assets/img/gallery/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

function Testimonials() {
  return (
    <section
      className={`${styles.section}`}
    >
      <div className={`${styles["testimonials-container"]}`}>
        <span className={`${common["sub-heading"]}`}>Testimonials</span>
        <h2 className={`${common["heading-secondary"]}`}>
          Once you try it, you can't go back
        </h2>
        <div className={`${styles.testimonials}`}>
          {testimonials.map((item) => (
            <TestimonialCard values={item} key={uuidv4()} />
          ))}
        </div>
      </div>

      <div className={styles.gallery}>
        {FoodImages.map((image) => {
          return (
            <figure className={styles["gallery-item"]} key={uuidv4()}>
              <img src={image} alt="Photo of beautifully arranged food" />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
