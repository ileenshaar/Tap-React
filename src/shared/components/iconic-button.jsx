import styles from "./iconic-button.module.css";

export function IconicButton({ label, icon, onClick }) {
  return (
    <button className={styles.headerButton} onClick={onClick}>
      <ion-icon name={icon}></ion-icon>
      <span>{label}</span>
    </button>
  );
}
