import { LayoutContainer } from "../../shared/components/layoutContainer";
import { FavouritesCards } from "./favourites-cards";
import styles from "./favourites.module.css";
import { useFavouritesContext } from "../../context/favouritesContext";

export function Favourites() {
  const { favourites } = useFavouritesContext();

  return (
    <div className={styles.favouritesSection} id="favourites-section">
      <LayoutContainer>
        <div>My Favourite Topics</div>
        <div className={styles.favouriteCardsContainer}>
          {favourites.map((element, key) => (
            <FavouritesCards key={key} content={element} />
          ))}
        </div>
      </LayoutContainer>
    </div>
  );
}
