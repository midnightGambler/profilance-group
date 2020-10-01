import React from "react";
import { Button } from "../UI/Button";
import {
  Form,
  FormError,
  FormGroup,
  FormInput,
  FormTextarea,
  FormTitle,
  Label,
} from "../UI/Form";
import { useNewsFormState } from "./useNewsFormState";

export const NewsForm = () => {
  const [formData, onChange, onSubmit, error] = useNewsFormState();

  return (
    <Form onSubmit={onSubmit}>
      <FormTitle>Добавить новость</FormTitle>
      {error && <FormError>{error}</FormError>}
      <FormGroup>
        <Label>Название</Label>
        <FormInput onChange={onChange} name="title" value={formData.title} />
      </FormGroup>
      <FormGroup>
        <Label>Текст</Label>
        <FormTextarea
          rows="5"
          onChange={onChange}
          name="text"
          value={formData.text}
        />
      </FormGroup>
      <Button className="form__btn" block type="submit">
        Добавить новость
      </Button>
    </Form>
  );
};
