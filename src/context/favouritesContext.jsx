import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const favouritesContext = createContext();

export function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );
  const [isInFavourites, setIsInFavourites] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const favButtonText = (id) => {
    const inFavourites = favourites.some((item) => item.id == id);
    setIsInFavourites(inFavourites);
  };

  const addRemoveFavourites = (data) => {
    const inFavourites = favourites.some((item) => item.id === data.id);

    if (inFavourites) {
      setFavourites((prevFavourites) =>
        prevFavourites.filter((item) => item.id !== data.id)
      );
    } else {
      setFavourites((prevFavourites) => [
        ...prevFavourites,
        {
          id: data.id,
          image: data.image,
          topic: data.topic,
          rating: data.rating,
        },
      ]);
    }
    setIsInFavourites(!inFavourites);
    setShowFavorites(true);
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <favouritesContext.Provider
      value={{
        favourites,
        setFavourites,
        addRemoveFavourites,
        isInFavourites,
        setIsInFavourites,
        showFavorites,
        setShowFavorites,
        favButtonText,
      }}
    >
      {children}
    </favouritesContext.Provider>
  );
}

export const useFavouritesContext = () => useContext(favouritesContext);
