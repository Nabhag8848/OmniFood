import styles from "./Features.module.css";

function Features({
  values,
}: {
  values: {
    title: string;
    text: string;
    icon: JSX.Element;
  };
}) {
  const { title, text, icon } = values;
  return (
    <div className={styles.feature}>
      {icon}
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Features;
