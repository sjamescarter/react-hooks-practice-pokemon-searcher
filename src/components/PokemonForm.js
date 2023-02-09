import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const formConfig = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
}

function PokemonForm({ onSubmit }) {
  const [formData, setFormData] = useState(formConfig)

  function handleUpdate(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, hp, frontUrl, backUrl } = formData;
    const newPokemon = {
      name: name,
      hp: parseInt(hp),
      sprites: { 
        front: frontUrl,
        back: backUrl
      }
    };
    onSubmit(newPokemon);
    setFormData(formConfig);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleUpdate} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleUpdate} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleUpdate}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleUpdate}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
