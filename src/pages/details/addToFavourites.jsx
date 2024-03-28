import React from "react";
import styles from "./detailsCard.module.css";
import { FavouritesButton } from "./favouritesButton";
import { useFavouritesContext } from "../../context/favouritesContext";

function AddToFavourites({ data }) {
  const { isInFavourites } = useFavouritesContext();

  return (
    <div className={styles.addFavouritesContainer}>
      <div className={styles.favouritesContainer}>
        <h4>Interested about this topic?</h4>
        <FavouritesButton
          label={
            isInFavourites ? "Remove from favourites" : "Add to favourites"
          }
          icon={isInFavourites ? "heart-dislike-outline" : "heart-outline"}
          data={data}
        />
        <h5>Unlimited Credits</h5>
      </div>
    </div>
  );
}

export default AddToFavourites;
