import { useState } from 'react';
import CardDetail from './CardDetail'

// Importing pokemon props from App.jsx
const Cards = ({ pokemon }) => {

   // Use to conditionally render a pokemon card
   const [poke, setPoke] = useState();

   // Making a fetch call to fetch details of specific pokemon id
   const onPokemonClick = async (id) => {
      // Gathers all data related to that pokemon
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      const data = await res.json();
      setPoke(data);
   }

   return(
      <div className="cards">
         {pokemon.results?.map((pokemon, index) => (
            
            
            <div
               key={index}
               className="pokeCard"
               onClick={() => onPokemonClick(pokemon.url.split('/')[6])}
            >

               {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </div>
         ))}

         {poke && <CardDetail poke={poke}/>}
      </div>
   )
}

export default Cards;