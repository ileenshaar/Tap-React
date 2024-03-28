import { LayoutContainer } from "../../shared/components/layoutContainer";
import AddToFavourites from "./addToFavourites";
import styles from "./detailsCard.module.css";
import DetailsCardInfo from "./detailsCardInfo";
import ImageComponent from "../../shared/components/image";

export function DetailsCard({ details }) {
  return (
    <LayoutContainer className={styles.detailsCardContainer}>
      <div className={styles.detailsCard}>
        <ImageComponent
          src={`../logos/${details.image}`}
          alt="this is the course's logo"
        />
        <div className={styles.detailsCardInfo}>
          <DetailsCardInfo topic={details.topic} name={details.name} />
          <AddToFavourites data={details} />
        </div>
      </div>
    </LayoutContainer>
  );
}
