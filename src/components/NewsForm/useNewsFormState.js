import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "../../actions/news";

const defaultState = {
  title: "",
  text: "",
};

const validate = (formData) => {
  let error;
  if (!formData.title || !formData.text) {
    error = "Все поля обязательны";
  }
  return error;
};

export const useNewsFormState = () => {
  const [formData, setFormData] = useState(defaultState);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (callback, e) => {
    e.preventDefault();

    const error = validate(formData);

    if (error) return setError(error);

    dispatch(addNews(formData));
    callback();
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return [formData, handleChange, handleSubmit, error];
};
