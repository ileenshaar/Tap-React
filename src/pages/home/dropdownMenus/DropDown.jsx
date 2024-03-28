import styles from "./DropDown.module.css";

export function DropDown({ children }) {
  return <div className={styles.dropDown}>{children}</div>;
}
