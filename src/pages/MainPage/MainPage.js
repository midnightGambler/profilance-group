import React from "react";
import { Container } from "../../components/UI/Container";

export const MainPage = ({ login = "Гость" }) => (
  <Container>
    <h1 className="text-center">Привет, {login}</h1>
  </Container>
);
