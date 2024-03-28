import { LayoutContainer } from "./layoutContainer";
import styles from "./header.module.css";
import { IconicButton } from "./iconic-button";
import { useThemeContext } from "../../context/theme-context";
import { useFavouritesContext } from "../../context/favouritesContext";

export function Header() {
  const { theme, toggleTheme } = useThemeContext();
  const { setShowFavorites } = useFavouritesContext();

  return (
    <header className={styles.header}>
      <LayoutContainer className={styles.headerContiner}>
        <h2>Web Topics</h2>
        <nav className={styles.nav}>
          <IconicButton
            icon={theme === "dark" ? "sunny-outline" : "moon-outline"}
            label={theme === "dark" ? "Light Mode" : "Dark Mode"}
            onClick={() => toggleTheme()}
          />
          <IconicButton
            icon={"heart-outline"}
            label={"Favourites"}
            onClick={() => setShowFavorites((prevState) => !prevState)}
          />
        </nav>
      </LayoutContainer>
    </header>
  );
}
