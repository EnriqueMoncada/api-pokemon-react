import React, { useState } from "react";
import "../stylesheets/Input.css";

const Input = (props) => {
  const [searchError, setSearchError] = useState(false);

  const API = "https://pokeapi.co/api/v2/pokemon";

  async function fetchData(urlApi) {
    try {
      const response = await fetch(urlApi);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  function findPokemon(event) {
    event.preventDefault();
    const value = event.target.elements.namedItem("pokemonWanted").value;
    if (value) {
      fetchData(`${API}/${value.toLowerCase()}`).then((data) => {
        props.onPokemonSearch(data);
        setSearchError(!data);
      });
    }
  }

  return (
    <form action="" onSubmit={findPokemon}>
      <input type="text" name="pokemonWanted" autoComplete="off" />
    </form>
  );
};

export default Input;
