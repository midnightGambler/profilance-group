import React from "react";
import { Button } from "../UI/Button";
import { Form, FormTitle, Label, FormGroup, FormInput } from "../UI/Form";

export const AuthForm = () => (
  <Form>
    <FormTitle>Авторизация</FormTitle>
    <FormGroup>
      <Label>Имя пользователя</Label>
      <FormInput />
    </FormGroup>
    <FormGroup>
      <Label>Пароль</Label>
      <FormInput />
    </FormGroup>
    <Button className="form__btn" variant="primary" type="submit">
      Авторизоваться
    </Button>
  </Form>
);
