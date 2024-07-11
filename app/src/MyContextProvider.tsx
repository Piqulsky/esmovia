import { createContext, useContext, useState, ReactNode } from "react";
import { Recipe } from "./types";

// Define the shape of the context state
interface MyContextState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  recipe: Recipe | null;
  setRecipe: (recipe: Recipe) => void;
  search: string;
  setSearch: (search: string) => void;
  favorites: number[];
  addFavorite: (favorite: number) => void;
  removeFavorite: (favorite: number) => void;
}

// Create the context with a default value
const MyContext = createContext<MyContextState | undefined>(undefined);

// Create a provider component using function declaration
function MyProvider(props: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(null);
  const [recipe, setRecipeState] = useState<Recipe | null>(null);
  const [search, setSearchState] = useState<string>("");
  const [favorites, setFavoriteState] = useState<number[]>([]);

  const setToken = (newToken: string) => {
    setTokenState(newToken);
  };

  const clearToken = () => {
    setTokenState(null);
  };

  const setRecipe = (newRecipe: Recipe) => {
    setRecipeState(newRecipe);
  };

  const setSearch = (newSearch: string) => {
    setSearchState(newSearch);
  };

  const addFavorite = (newFavorite: number) => {
    setFavoriteState([...favorites, newFavorite]);
  };
  const removeFavorite = (removedFavorite: number) => {
    setFavoriteState(favorites.filter((n) => n != removedFavorite));
  };

  return (
    <MyContext.Provider
      value={{
        token,
        setToken,
        clearToken,
        recipe,
        setRecipe,
        search,
        setSearch,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

// Custom hook to use the context
function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
}

export { MyProvider, useMyContext };
