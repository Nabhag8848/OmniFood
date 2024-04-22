import { ReactNode } from "react";
import styles from "./OutlineButton.module.css";

function OutlineButton({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className={`${styles.btn} ${styles.btnOutline} ${styles.marginRightSmall}`}
    >
      {children}
    </a>
  );
}

export default OutlineButton;
