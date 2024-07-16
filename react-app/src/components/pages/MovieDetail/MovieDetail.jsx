import { useContext, useEffect } from "react";
import "./MovieDetail.css";
import { myContext } from "../../../app/context";
import {
  Badge,
  Card,
  Container,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";

function MovieDetail() {
  const { state, SetAuth } = useContext(myContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = state.auth.movie;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <Container size="md" my="xl">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group position="apart" mt="md" mb="xs">
          <Title order={2}>{title}</Title>
          <Badge color={adult ? "red" : "green"} variant="light">
            {adult ? "Adult" : "Family"}
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Original Title: {original_title}
        </Text>
        <Text size="sm" c="dimmed">
          Release Date: {release_date}
        </Text>
        <Text size="sm" c="dimmed">
          Original Language: {original_language}
        </Text>
        <Text size="sm" c="dimmed">
          Popularity: {popularity}
        </Text>
        <Text size="sm" c="dimmed">
          Vote Average: {vote_average}
        </Text>
        <Text size="sm" c="dimmed">
          Vote Count: {vote_count}
        </Text>
        <Text size="sm" c="dimmed">
          Video: {video ? "Yes" : "No"}
        </Text>
        {/* <Text size="sm" c="dimmed">
          Genre IDs: {genre_ids.join(", ")}
        </Text> */}

        <Text mt="md">
          <strong>Overview:</strong>
        </Text>
        <Text>{overview}</Text>

        <Card.Section mt="md">
          <Image
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt="Backdrop"
          />
        </Card.Section>

        <Card.Section>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </Card.Section>
      </Card>
    </Container>
  );
}

export default MovieDetail;
