import { useEffect, useState } from "react";
import { Answer, CharacterResult } from "../../interfaces";
import bringCharacters from "../../services/api-calls";
import "./Home.css";
import { Card, Image, Text, Group } from "@mantine/core";

function Home() {
  const [characters, setCharacters] = useState<CharacterResult[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>("");

  useEffect(() => {
    if (characters?.length === 0) {
      //we call the characters.....
      const fetchDataRickMorty = async (): Promise<void> => {
        const fetched: Answer = await bringCharacters();

        if (fetched.success) {
          setFlag(true);
          setCharacters(fetched.data.results);
        } else {
          setMsgError(fetched.message);
        }
      };

      if (!flag) {
        fetchDataRickMorty();
      }
    }
  }, [characters]);

  return (
    <>
      <h1>Rick & Morty charaters</h1>
      <p>{msgError}</p>
      <Group className="character-list">
        {characters.map((character) => (
          <Card
            className="character-card"
            key={character.id}
            shadow="sm"
            padding="lg"
            style={{ maxWidth: 300 }}
          >
            <Card.Section>
              <Image src={character.image} alt={character.name} height={160} />
            </Card.Section>
            <Text size="lg" style={{ marginTop: 10, fontWeight: "bold" }}>
              {character.name}
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Status:</strong> {character.status}
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Species:</strong> {character.species}
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Gender:</strong> {character.gender}
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Origin:</strong> {character.origin.name}
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Location:</strong> {character.location.name}
            </Text>
          </Card>
        ))}
      </Group>
    </>
  );
}

export default Home;
