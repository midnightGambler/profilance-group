import React from "react";
import { Container } from "../UI/Container";
import { Logo } from "../Logo/Logo";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className="header">
      <Container className="container--flex">
        <Logo />
        <Navigation />
        <AuthBtn className="auth-btn--full-heigth" />
      </Container>
    </header>
  );
};
