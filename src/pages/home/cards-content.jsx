import React from "react";
import styles from "./cards.module.css";
import { GenerateStars } from "../../shared/components/generateStarsHTML";
import ImageComponent from "../../shared/components/image";
import { Link } from "react-router-dom";

export function TopicContent({ topic }) {
  return (
    <Link to={`/details/${topic.id}`} className={styles.card}>
      <ImageComponent src={`logos/${topic.image}`} alt={"course logo"} />
      <div className={styles.cardInfo}>
        <h3 className={styles.cardCategory}>{topic.category}</h3>
        <h2 className={styles.cardTopic}>{topic.topic}</h2>
        <div className={styles.stars}>
          {" "}
          <GenerateStars starIcons={topic.rating} />
        </div>
        <div className={styles.cardAuthor}>
          <p>Author: {topic.name}</p>
        </div>
      </div>
    </Link>
  );
}
