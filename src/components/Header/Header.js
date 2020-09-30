import React from "react";
import { Container } from "../UI/Container";
import { Logo } from "../Logo/Logo";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Container className="container--flex container--no-padding">
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
        <AuthBtn className="auth-btn--full-heigth" />
      </Container>
    </header>
  );
};
