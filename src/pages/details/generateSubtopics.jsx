import "./SubtopicsList.module.css";

export function GenerateSubtopics({ subtopic }) {
  return (
    <ul>
      <ion-icon name="checkmark-circle-outline"></ion-icon>
      {subtopic}
    </ul>
  );
}
