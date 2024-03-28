import { Outlet } from "react-router-dom";
import { Header } from "../shared/components/header";
import { WelcomeSection } from "../shared/components/welcomeSection/welcome";
import { Footer } from "../shared/components/footer";
import { LayoutContainer } from "./appLayoutContainer";
import { Favourites } from "../pages/favourites/favourites";
import { useFavouritesContext } from "../context/favouritesContext";

export function AppLayout() {
  const { showFavorites } = useFavouritesContext();

  return (
    <>
      <LayoutContainer>
        <Header />
        <WelcomeSection />
        <main>
          <Outlet />
          {showFavorites && <Favourites />}
        </main>
        <Footer />
      </LayoutContainer>
    </>
  );
}
