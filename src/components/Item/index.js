import React from "react";

import { Container, Title, Button } from "./styles";

function Item(props) {
  return (
    <Container>
      <Title>{props.name}</Title>
      <div>
        <Button>Edit</Button>
        <Button btnDelete>Delete</Button>
      </div>
    </Container>
  );
}

export default Item;
