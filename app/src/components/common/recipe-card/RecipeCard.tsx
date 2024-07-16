import { Card, Image, Button, Text, Badge } from "@mantine/core";
import { Recipe } from "../../../types"; // Define types for Recipe

interface RecipeCardProps {
  recipe: Recipe;
  onDetailsClick: (recipe: Recipe) => void;
}

function RecipeCard({ recipe, onDetailsClick }: RecipeCardProps) {
  return (
    <Card shadow="sm">
      <Image src={recipe.image} alt={recipe.name} height={100} fit="cover" />
      <Text fw="bold">{recipe.name}</Text>
      <Badge m="sm">{recipe.cuisine}</Badge>
      <Button onClick={() => onDetailsClick(recipe)}>Details</Button>
    </Card>
  );
}

export default RecipeCard;
