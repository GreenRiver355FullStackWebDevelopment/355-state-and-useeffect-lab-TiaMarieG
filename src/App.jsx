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
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?_start=${pokePage[0]}&_end=${pokePage[1]}`);
    const data = await res.json();
    setPokemon(data);
    console.log(data);
  };



  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <div className="main-container">
        <div>
          <Cards pokemon={pokemon} />
          <div>
            <button>Back</button>
            <button>Next</button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default App
