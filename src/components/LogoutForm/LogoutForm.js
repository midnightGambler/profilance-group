import React from "react";
import { Button } from "../UI/Button";
import { signOut } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

export const LogoutForm = () => {
  const dispatch = useDispatch();
  const login = useSelector(({ auth }) => auth.login);

  const handleSignOut = () => dispatch(signOut());

  return (
    <div className="logout-form">
      <div className="logout-form__text">Вы вошли как</div>
      <h2 className="logout-form__login">{login}</h2>
      <Button block onClick={handleSignOut}>
        Выйти
      </Button>
    </div>
  );
};
