import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({
  values,
}: {
  values: {
    profile: string;
    alt: string;
    text: string;
    name: string;
  };
}) {
  const { profile, alt, text, name } = values;
  return (
    <figure className={styles.testimonial}>
      <img className={styles["testimonial-img"]} src={profile} alt={alt} />
      <blockquote className={styles["testimonial-text"]}>{text}</blockquote>
      <p className={styles["testimonial-name"]}>&mdash; {name}</p>
    </figure>
  );
}


