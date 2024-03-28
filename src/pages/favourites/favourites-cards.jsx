import { GenerateStars } from "../../shared/components/generateStarsHTML";
import styles from "./favourites-cards.module.css";

export function FavouritesCards({ content }) {
  const basePath =
    window.location.pathname === "/Tap-React/"
      ? "/Tap-React/logos/"
      : "../logos/";

  return (
    <div className={styles.favouriteCards}>
      <img src={`${basePath}${content.image}`} alt="Favourite Card" />
      <h2>{content.topic}</h2>
      <div className={styles.favouriteCardsStars}>
        <GenerateStars starIcons={content.rating} />
      </div>
    </div>
  );
}
