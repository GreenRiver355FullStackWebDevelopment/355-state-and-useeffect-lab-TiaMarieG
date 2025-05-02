// Import useState/useEffect so that the Pokemon data can be fetched
import { useState, useEffect } from 'react'

// Importing the Cards component that will render an interable list of the 20 available pokemon
import Cards from './components/Cards'

import './App.css'

function App() {
  // Setting useState to an empty array so the effect will only run once on mount
  const [pokemon, setPokemon] = useState([]);

  // Limit the amount of data that appears on our page at a time - Patchination
  const [pokePage, setPokePage] = useState([0, 20]);

  // Call the fetch function
  useEffect(() => {
    fetchPokemon();
  }, [pokePage]);

  // Fetch function that fetches data from the provided GET
  const fetchPokemon = async () => {
    // Referencing the useState so that only 20 pokemone are pulled at a time
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokePage[0]}&limit=${pokePage[1]}`);
    const data = await res.json();
    setPokemon(data);
    console.log(data);
  };

  // Creating a click function where when the 'Next' button is clicked, it will move to the next 20 pokemon
  const onClickNext = () => {
    if (pokePage[0] + pokePage[1] < 1302) {
      setPokePage(([offset, limit]) => [offset + limit, limit]);
    }
    else {
      setPokePage([0, 20]);
    }
  };

  // Creating a click function where when the 'Back' button is clicked, it will move to the previous 20 pokemon
  // Or if it is on the first 'page' of pokemon, it will do nothing
  const onClickBack = () => {
    setPokePage(([offset, limit]) => {
      if (offset == 0) return [offset, limit];
      return [offset - limit, limit];
    });
  };

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <div className="main-container">
        <div>
          <Cards pokemon={pokemon} />
          <div>
            <button onClick={onClickBack}>Back</button>
            <button onClick={onClickNext}>Next</button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default App
