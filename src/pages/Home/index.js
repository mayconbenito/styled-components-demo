import React from "react";

import { Container, InputContainer, Label, Input, Button } from "./styles";

import TodoList from "../../components/TodoList";

function Home() {
  return (
    <Container>
      <InputContainer>
        <Label>Todo name</Label>
        <Input placeholder="Todo name" />
        <Button>Create todo</Button>
      </InputContainer>
      <TodoList />
    </Container>
  );
}

export default Home;
