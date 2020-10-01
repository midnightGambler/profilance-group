import React, { useState } from "react";
import { Container } from "../UI/Container";
import { Logo } from "../Logo/Logo";
import { AuthBtn } from "../AuthBtn/AuthBtn";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { AuthModal } from "../AuthModal/AuthModal";

export const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(true);

  const toggleModal = () => setIsAuthModalOpen(!isAuthModalOpen);

  return (
    <>
      <header className="header">
        <Container className="container--flex container--no-padding">
          <Link to="/">
            <Logo />
          </Link>
          <Navigation />
          <AuthBtn onClick={toggleModal} className="auth-btn--full-heigth" />
        </Container>
      </header>
      <AuthModal isOpen={isAuthModalOpen} onClose={toggleModal} />
    </>
  );
};
