import React, { useState } from "react";
import "./fetch-pokemon.css";

export function FetchPokemon({ criteria }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${criteria}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokémon not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPokemon(null);
      });
  };

  return (
    <div className="PokemonFetcher">
      <button onClick={fetchPokemon}>Fetch Pokémon</button>
      {error && <p>Error: {error}</p>}
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Base Experience: {pokemon.base_experience}</p>
        </div>
      )}
    </div>
  );
}
