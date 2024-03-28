import { TopicContent } from "./cards-content";
import styles from "./cards.module.css";

export function Cards({ courses }) {
  return (
    <div className={styles.cardsContainer}>
      {courses.map((topic) => (
        <TopicContent key={topic.id} topic={topic} />
      ))}
    </div>
  );
}
