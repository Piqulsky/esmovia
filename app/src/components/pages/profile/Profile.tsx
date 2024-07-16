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
  Button,
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

interface RatedRecipe extends Recipe {
  rate: number;
}

function Profile() {
  const navigate = useNavigate();
  const { token, rated, setRecipe } = useMyContext();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [ratedList, setRatedList] = useState<RatedRecipe[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

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
    async function fetchFavorite(id: string): Promise<RatedRecipe> {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data: Recipe = await response.json();
      return { ...data, rate: rated[id] }; // Return the fetched data with the rate
    }

    // Create a Set to store unique items temporarily
    const uniqueRated = new Set<RatedRecipe>();

    // Fetch each favorite recipe and add to the Set
    Promise.all(Object.keys(rated).map((f) => fetchFavorite(f)))
      .then((results) => {
        results.forEach((data) => uniqueRated.add(data));
      })
      .then(() => {
        // Convert Set back to array and update state with unique items
        setRatedList(Array.from(uniqueRated));
      });

    Object.keys(rated).map((f) => fetchFavorite(f));
  }, [rated]);

  function handleDetailsClick(recipe: Recipe) {
    setRecipe(recipe);
    navigate("/details");
  }

  function handleSort(order: "asc" | "desc") {
    const sortedList = [...ratedList].sort((a, b) => {
      if (order === "asc") {
        return a.rate - b.rate;
      } else {
        return b.rate - a.rate;
      }
    });
    setRatedList(sortedList);
    setSortOrder(order);
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
      <Button.Group mt="md">
        <Button
          onClick={() => handleSort("asc")}
          variant={sortOrder === "asc" ? "filled" : "outline"}
        >
          Sort Ascending
        </Button>
        <Button
          onClick={() => handleSort("desc")}
          variant={sortOrder === "desc" ? "filled" : "outline"}
        >
          Sort Descending
        </Button>
      </Button.Group>
      <Grid p="xs">
        {ratedList.length > 0 &&
          ratedList.map((f) => (
            <Grid.Col key={f.id} span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <RecipeCard recipe={f} onDetailsClick={handleDetailsClick} />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  );
}

export default Profile;
