import React, { useEffect, useState } from "react";
import "../stylesheets/PokemonData.css";
import Shadow from "../img/Shadow.png";
import Error from "../img/error.png";

const PokemonData = (props) => {
  const data = props.data;

  useEffect(() => {
    if (data) {
      renderPokemonData(data);
    }else {
     clearPokemonData();
   }
  }, [data]);

  const [pokeName, setPokeName] = useState("Pokedex");
  let [pokeImgSrc, setPokeImgSrc] = useState(Shadow);
  const [pokeImgBg, setPokeImgBg] = useState("");
  const [pokeId, setPokeId] = useState(null);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeStats, setPokeStats] = useState([]);

  const typeColors = {
    electric: "#FFEA70",
    normal: "#B09398",
    fire: "#FF675C",
    water: "#0596C7",
    ice: "#AFEAFD",
    rock: "#999799",
    flying: "#7AE7C7",
    grass: "#4A9681",
    psychic: "#FFC6D9",
    ghost: "#561D25",
    bug: "#A2FAA3",
    poison: "#795663",
    ground: "#D2B074",
    dragon: "#DA627D",
    steel: "#1D8A99",
    fighting: "#2F2F2F",
    default: "#2A1A1F",
  };

  function renderPokemonData(data) {
    setPokeStats(data.stats);
    setPokeTypes(data.types);
    setCardColor(data.types);
    setPokeName(data.name);
    setPokeId(`Nº ${data.id}`);
    setPokeImgSrc(data.sprites.front_default);
  }

  function clearPokemonData() {
   setPokeImgBg("");
   setPokeId(null);
   setPokeTypes([]);
   setPokeStats([]);
 }

  function setCardColor(types) {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1]
      ? typeColors[types[1].type.name]
      : typeColors.default;
    setPokeImgBg(`radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`);
    console.log(`colorOne: ${colorOne}, colorTwo: ${colorTwo}`);
  }

  return (
    <div  className="pokeCard">
         {console.log(pokeName, pokeImgSrc, pokeImgBg, pokeId, pokeTypes, pokeStats)}

      <div >{props.searchError ?  `pokemon no encontrado` : pokeName}</div>
      <div
        
        className="imgBox"
        style={{
          backgroundImage: pokeImgBg,
          backgroundSize: "30px 30px",
        }}
      >
        <img
          
          className="pokeImg"
          src={props.searchError ? Error : pokeImgSrc}
          alt="pokemon"
        />
      </div>
      <div >{data && pokeId}</div>
      <div  className="pokemonTypes">
        {pokeTypes.map((types, index) => (
          <div key={index} style={{ color: typeColors[types.type.name] }}>
            {types.type.name}
          </div>
        ))}
      </div>
      <div  className="pokemonStats">
        {pokeStats.map((stat, index) => (
          <div key={index}>
            <div>{stat.stat.name}</div>
            <div>{stat.base_stat}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonData;
