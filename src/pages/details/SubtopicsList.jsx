import { GenerateSubtopics } from "./generateSubtopics";
import styles from "./SubtopicsList.module.css";

export function SubtopicsList({ topic, subtopics }) {
  return (
    <li className={styles.subtopics}>
      <h2>{topic} Sub Topics</h2>
      {subtopics.map((subtopic, key) => (
        <GenerateSubtopics key={key} subtopic={subtopic} />
      ))}
    </li>
  );
}
