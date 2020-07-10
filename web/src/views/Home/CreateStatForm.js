import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const initialFormState = {
  name: "",
  description: "",
};

const CreateStatForm = (props) => {
  const { setStats, stats } = props;
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    e.persist();
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/stats/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formState }),
    })
      .then((response) => response.json())
      .then((response) => {
        stats.push(response);
        setStats((prevState) => [...stats]);
        setFormState(initialFormState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="statName">Name</Label>
        <Input
          type="text"
          name="name"
          id="statName"
          placeholder="Name"
          onChange={handleChange}
          value={formState.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="statDescription">Description</Label>
        <Input
          type="text"
          name="description"
          id="statDescription"
          placeholder="Description"
          onChange={handleChange}
          value={formState.description}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default CreateStatForm;
