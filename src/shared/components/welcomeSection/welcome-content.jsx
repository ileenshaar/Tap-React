import React from "react";
import styles from "./welcome-content.module.css";

export function WelcomeSectionContent() {
  return (
    <div className={styles.welcomeSection}>
      <p className={styles.welcomeText}>Welcome to our website!</p>
      <h3 className={styles.welcomeHeading}>
        We have a new design that's fresh, modern, and easy to use.
      </h3>
    </div>
  );
}
