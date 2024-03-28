import styles from "./favouritesButton.module.css";
import { useFavouritesContext } from "../../context/favouritesContext";

export function FavouritesButton({ label, icon, data }) {
  const { addRemoveFavourites } = useFavouritesContext();

  return (
    <button
      className={styles.addToFavouritesButton}
      onClick={() => addRemoveFavourites(data)}
    >
      {" "}
      <span>{label}</span>
      <ion-icon name={icon}></ion-icon>
    </button>
  );
}
