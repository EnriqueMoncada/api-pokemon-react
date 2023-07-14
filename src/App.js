import './App.css';
import React, {useState} from 'react';
import Input from './components/Input.jsx';
import PokemonData from './components/PokemonData.jsx';

function App() {
  const [searchError, setSearchError] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);

  const handlePokemonSearch = (data) => {
    if (data) {
      setPokemonData(data);
      setSearchError(false);
    } else {
      setPokemonData(null);
      setSearchError(true);
    }
  };
  return (
    <div>
        <Input onPokemonSearch={handlePokemonSearch}/>
        <PokemonData data={pokemonData} searchError={searchError} />
    </div>
  );
}

export default App;
