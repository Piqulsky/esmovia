import { useEffect, useState } from "react";
import { Container, Grid } from "@mantine/core";
import RecipeCard from "../../common/recipe-card/RecipeCard";
import { Recipe } from "../../../types";
import { useMyContext } from "../../../MyContextProvider";
import { useNavigate } from "react-router-dom";

function RecipesPage() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { setRecipe, search } = useMyContext();

  useEffect(() => {
    if (search.length == 0) {
      fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((data) => {
          if (data.recipes) {
            setRecipes(data.recipes);
          }
        });
    } else {
      fetch(`https://dummyjson.com/recipes/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.recipes) {
            setRecipes(data.recipes);
          }
        });
    }
  }, [search]);

  function handleDetailsClick(recipe: Recipe) {
    setRecipe(recipe);
    navigate("/details");
  }

  return (
    <Container my="md">
      <Grid>
        {recipes.map((recipe) => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <RecipeCard recipe={recipe} onDetailsClick={handleDetailsClick} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default RecipesPage;
