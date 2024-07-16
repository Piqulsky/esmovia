import React, { useContext } from "react";
import "./movie-details.css";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../app/context";

function MovieDetails({ movie }) {
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
  } = movie;
  const { state, SetAuth } = useContext(myContext);

  const navigate = useNavigate();
  const selectMovie = () => {
    SetAuth("movie", movie);
    navigate("/moviedetail");
  };

  return (
    <Card
      className="card-hover-effect"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="title"
          onClick={selectMovie}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="crimson">{original_title}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {overview}
      </Text>

      <Button
        color="crimson"
        fullWidth
        mt="md"
        radius="md"
        onClick={selectMovie}
      >
        Details
      </Button>
    </Card>
  );
}

export default MovieDetails;
