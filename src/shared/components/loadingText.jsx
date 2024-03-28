import styles from "./loadingText.module.css";

export function LoadingText() {
  return (
    <div id="loadingIndicator" className={styles.loadingIndicator}>
      Loading...
    </div>
  );
}
