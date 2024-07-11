import { useEffect, useState } from "react";
import { useMyContext } from "../../../MyContextProvider";
import {
  Container,
  Card,
  Image,
  Text,
  Title,
  Loader,
  Grid,
} from "@mantine/core";
import RecipeCard from "../../common/recipe-card/RecipeCard";
import { Recipe } from "../../../types";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  company: {
    name: string;
    department: string;
    title: string;
  };
  university: string;
  role: string;
}

function Profile() {
  const navigate = useNavigate();
  const { token, favorites, setRecipe } = useMyContext();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [favoriteList, setFavoriteList] = useState<Recipe[]>([]);
  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch("https://dummyjson.com/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setProfile(data);
    }

    fetchProfile();
  }, [token]);

  useEffect(() => {
    async function fetchFavorite(id: number) {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      return data; // Return the fetched data
    }

    // Create a Set to store unique items temporarily
    const uniqueFavorites = new Set<Recipe>();

    // Fetch each favorite recipe and add to the Set
    Promise.all(favorites.map((f) => fetchFavorite(f)))
      .then((results) => {
        results.forEach((data) => uniqueFavorites.add(data));
      })
      .then(() => {
        // Convert Set back to array and update state with unique items
        setFavoriteList(Array.from(uniqueFavorites));
      });

    favorites.map((f) => fetchFavorite(f));
  }, [favorites]);

  function handleDetailsClick(recipe: Recipe) {
    setRecipe(recipe);
    navigate("/details");
  }

  if (!profile) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container size="sm" p="sm">
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image
            src={profile.image}
            height={160}
            alt={`${profile.firstName} ${profile.lastName}`}
          />
        </Card.Section>

        <Title order={2} mt="md">
          {profile.firstName} {profile.lastName}
        </Title>
        <Text>Email: {profile.email}</Text>
        <Text>Phone: {profile.phone}</Text>
        <Text>Username: {profile.username}</Text>
        <Text>Birth Date: {profile.birthDate}</Text>
        <Text>
          Address: {profile.address.address}, {profile.address.city},{" "}
          {profile.address.state}, {profile.address.country}
        </Text>
        <Text>
          Company: {profile.company.name}, {profile.company.department},{" "}
          {profile.company.title}
        </Text>
        <Text>University: {profile.university}</Text>
        <Text>Role: {profile.role}</Text>
      </Card>
      <Grid p="xs">
        {favoriteList.length > 0 &&
          favoriteList.map((f) => (
            <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <RecipeCard recipe={f} onDetailsClick={handleDetailsClick} />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  );
}

export default Profile;
