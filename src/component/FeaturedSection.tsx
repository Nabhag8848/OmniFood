import styles from "./FeaturedSection.module.css";
import common from "../pages/Common.module.css";
import { v4 as uuidv4 } from "uuid";

const FeaturedImages: Array<string> = Object.values(
  import.meta.glob("@assets/img/logos/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

function FeaturedSection() {
  return (
    <section className={styles.section}>
      <div className={`${common.container}`}>
        <h2 className={styles.heading}>As featured in</h2>
        <div className={styles.logos}>
          {FeaturedImages.map((image) => (
            <img src={image} alt="Featured Compony Logo" key={uuidv4()} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
