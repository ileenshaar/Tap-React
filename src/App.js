import "./App.css";
import { AppLayout } from "./layout/app.layout";
import { Details } from "./pages/details/details";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./context/theme-context";
import { FavouritesContextProvider } from "./context/favouritesContext";

function App() {
  return (
    <>
      <FavouritesContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route path={"/"} element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/details/:id" element={<Details />} />
            </Route>
          </Routes>
        </ThemeContextProvider>
      </FavouritesContextProvider>
    </>
  );
}
export default App;
