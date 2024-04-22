import { ReactNode } from "react";
import styles from "./PrimaryButton.module.css";

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className={`${styles.btn} ${styles.btnFull} ${styles.marginRightSmall}`}
    >
      {children}
    </a>
  );
}

export default PrimaryButton;
