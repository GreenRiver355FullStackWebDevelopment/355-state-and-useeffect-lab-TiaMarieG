import { useState } from 'react';
import CardDetail from './CardDetail'

// Importing pokemon props from App.jsx
const Cards = ({ pokemon }) => {

   const [poke, setPoke] = useState();


   return(
      <div className="cards">
         {pokemon.results?.map((pokemon, index) => (
            <div
               key={index}
               className="pokeCard"
            >

               {pokemon.name}
            </div>
         ))}

         {poke && <CardDetail poke={poke}/>}
      </div>
   )
}

export default Cards;