import { useEffect, useState } from "react";
import { useMyContext } from "../../../MyContextProvider"; // Import the custom context hook
import {
  Container,
  Image,
  Text,
  Badge,
  Card,
  Group,
  Rating,
} from "@mantine/core"; // Import Mantine UI components

function RecipeDetails() {
  const { recipe, rated, addRating } = useMyContext(); // Access recipe from context
  const [rate, setRate] = useState<number>(0);

  if (!recipe) {
    return <div>No recipe selected.</div>;
  }

  useEffect(() => {
    if (Object.keys(rated).find((n) => n == recipe.id.toString()))
      setRate(rated[recipe.id.toString()]);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling behavior
    });
  }, []);

  const handleRating = (val: number) => {
    setRate(val);
    addRating(recipe.id.toString(), val);
  };

  return (
    <Container size="sm">
      <Card shadow="sm" style={{ marginBottom: "20px" }}>
        <Image src={recipe.image} alt={recipe.name} />
        <Text size="xl" fw="bold" style={{ marginTop: "10px" }}>
          {recipe.name}
        </Text>
        <Text>
          <Badge color="blue">{recipe.cuisine}</Badge>
        </Text>
        <Rating value={rate} onChange={handleRating} />
        <Text style={{ marginTop: "10px" }}>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </Text>
        <Text>
          <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
        </Text>
        <Text>
          <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
        </Text>
        <Text>
          <strong>Servings:</strong> {recipe.servings}
        </Text>
        <Text>
          <strong>Calories per Serving:</strong> {recipe.caloriesPerServing}
        </Text>
      </Card>

      <Card shadow="sm">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </Card>

      <Card shadow="sm" style={{ marginTop: "20px" }}>
        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </Card>

      <Card shadow="sm" style={{ marginTop: "20px" }}>
        <Text>
          <strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount}{" "}
          reviews)
        </Text>
        <Text>
          <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
        </Text>
        <h3 style={{ marginTop: "10px" }}>Tags:</h3>
        <Group>
          {recipe.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </Group>
      </Card>
    </Container>
  );
}

export default RecipeDetails;
