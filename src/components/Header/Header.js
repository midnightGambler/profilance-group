import React from "react";
import cn from "classnames";
import { Container } from "../UI/Container";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import LoginIcon from "../../icons/login.svg";

const navigation = [
  {
    title: "Главная",
    path: "/",
  },
  {
    title: "Новости",
    path: "/news",
  },
];

const Navigation = () => (
  <nav className="navigation navigation--ml-auto">
    <ul className="navigation__list">
      {navigation.map(({ title, path }) => (
        <li className="navigation__list-item">
          <NavLink exact className="navigation__list-item-link" to={path}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

const AuthBtn = ({
  width = "1rem",
  height = "1rem",
  fill = "#fff",
  className,
  ...rest
}) => {
  return (
    <button className={cn("auth-btn", className)}>
      <LoginIcon fill={fill} width={width} height={height} {...rest} />
    </button>
  );
};

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header--inner">
          <Logo />
          <Navigation />
          <AuthBtn className="auth-btn--full-heigth" />
        </div>
      </Container>
    </header>
  );
};
