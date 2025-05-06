import { useState } from "react";
import CardDetail from "./CardDetail";

// Importing CSS
import { Box, Button } from "@mui/material";

// Importing pokemon props from App.jsx
const Cards = ({ pokemon }) => {
  // Use to conditionally render a pokemon card
  const [poke, setPoke] = useState();

  // Making a fetch call to fetch details of specific pokemon id
  const onPokemonClick = async (id) => {
    // Gathers all data related to that pokemon
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await res.json();
    setPoke(data);
  };

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          backgroundColor: "#222",
          gap: 1.5,
          padding: 3,
          borderRadius: 3,
          maxWidth: "750px",
          margin: "0 auto",
        }}
      >
        {/* Iterating through the 20 pokemon pulled from the API and displaying them */}
        {pokemon.results?.map((pokemon, index) => (
          <Button
            key={index}
            className="pokeCard"
            // When a specific pokemon is clicked, their details are displayed
            onClick={() => onPokemonClick(pokemon.url.split("/")[6])}
            sx={{
              backgroundColor: "#444",
              color: "white",
            }}
          >
            {/* Capitalizing the first letter of the pokemon name */}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Button>
        ))}
      </Box>

      {poke && <CardDetail poke={poke} />}
    </div>
  );
};

export default Cards;
