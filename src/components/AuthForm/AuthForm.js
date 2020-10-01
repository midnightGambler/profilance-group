import React from "react";
import { Button } from "../UI/Button";
import {
  Form,
  FormTitle,
  Label,
  FormGroup,
  FormInput,
  FormError,
} from "../UI/Form";
import { useAuthFormState } from "./useAuthFormState";

export const AuthForm = ({ handleCloseModal }) => {
  const [formData, onChange, onSubmit, error] = useAuthFormState();

  return (
    <Form onSubmit={onSubmit.bind(null, handleCloseModal)}>
      <FormTitle>Авторизация</FormTitle>
      {error && <FormError>{error}</FormError>}
      <FormGroup>
        <Label>Имя пользователя</Label>
        <FormInput value={formData.login} onChange={onChange} name="login" />
      </FormGroup>
      <FormGroup>
        <Label>Пароль</Label>
        <FormInput
          value={formData.password}
          onChange={onChange}
          name="password"
          type="password"
          error="Неверный логин"
        />
      </FormGroup>
      <Button block className="form__btn" type="submit">
        Авторизоваться
      </Button>
    </Form>
  );
};
