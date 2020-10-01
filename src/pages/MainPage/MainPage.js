import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/UI/Container";

export const MainPage = () => {
  const login = useSelector(({ auth }) => auth.login);

  return (
    <Container>
      <h1 className="text-center">Привет, {login}</h1>
    </Container>
  );
};
