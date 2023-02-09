import React from "react";
// import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ children }) {
  return (
    <Card.Group itemsPerRow={6}>
      {children}
    </Card.Group>
  );
}

export default PokemonCollection;
