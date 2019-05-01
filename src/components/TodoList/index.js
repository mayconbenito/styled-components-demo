import React from "react";

import { Container, Title, Info, ItemsList } from "./styles";

import Item from "../Item";

const renderItems = [
  { name: "Make coffe" },
  { name: "Read book" },
  { name: "Drink water" }
];

function TodoList() {
  return (
    <Container>
      <Title>Todos</Title>
      <Info>7 Items</Info>
      <ItemsList>
        {renderItems.map(item => (
          <Item name={item.name} />
        ))}
      </ItemsList>
    </Container>
  );
}

export default TodoList;
