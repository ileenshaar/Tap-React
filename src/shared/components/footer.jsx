import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      Developed with <ion-icon name="heart"></ion-icon>
      <span className={styles.footer__year}>&copy;</span> 2023
    </footer>
  );
}
