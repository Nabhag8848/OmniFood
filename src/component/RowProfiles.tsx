import styles from "./RowProfiles.module.css";

const ProfileImages: Array<string> = Object.values(
  import.meta.glob("@assets/img/customers/customer-*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

function RowProfiles() {
  return (
    <div className={styles.deliveredMeal}>
      <div className={styles.deliveredImg}>
        {ProfileImages.map((image) => {
          return <img src={image} alt="" />;
        })}
      </div>
      <p className={styles.deliveredText}>
        <span>250,000+</span> meals delivered last year!
      </p>
    </div>
  );
}

export default RowProfiles;
