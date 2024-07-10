import { createContext, useContext, useState, ReactNode } from "react";
import { Recipe } from "./types";

// Define the shape of the context state
interface MyContextState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  recipe: Recipe | null;
  setRecipe: (recipe: Recipe) => void;
}

// Create the context with a default value
const MyContext = createContext<MyContextState | undefined>(undefined);

// Create a provider component using function declaration
function MyProvider(props: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(null);
  const [recipe, setRecipeState] = useState<Recipe | null>(null);

  const setToken = (newToken: string) => {
    setTokenState(newToken);
  };

  const clearToken = () => {
    setTokenState(null);
  };

  const setRecipe = (newRecipe: Recipe) => {
    setRecipeState(newRecipe);
  };

  return (
    <MyContext.Provider
      value={{ token, setToken, clearToken, recipe, setRecipe }}
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
