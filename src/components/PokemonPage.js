import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import PokemonCard from "./PokemonCard";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [collection, setCollection] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setCollection(data));
  }, [])

  const searchResults = collection.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
  const display = search === "" ? collection : searchResults
  
  function onSearch(search){
    console.log(search);
  }

  function onSubmit(newPokemon){
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(data => setCollection([...collection, data]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={onSubmit} />
      <br />
      <Search search={search} setSearch={setSearch} onSearch={onSearch} />
      <br />
      <PokemonCollection>
        {display.map(pokemon => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />
        })}
      </PokemonCollection>
    </Container>
  );
}

export default PokemonPage;
