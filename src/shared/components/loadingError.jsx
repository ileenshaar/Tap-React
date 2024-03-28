import styles from "./loadingError.module.css";

export function DisplayLoadingError() {
  return (
    <div className={styles.errorLoadingMsg}>
      Something went wrong. Web topics failed to load.
    </div>
  );
}
