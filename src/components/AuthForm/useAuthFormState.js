import { useState } from "react";
import { useDispatch } from "react-redux";
import { users } from "../../config";
import { signIn } from "../../actions/auth";

const defaultFormState = {
  login: "",
  password: "",
};

const validate = (formData) => {
  const user = users.find(({ login }) => login === formData.login);

  if (!user) return "Юзер не найден";

  const isValidPassword = user.password === formData.password;

  if (!isValidPassword) return "Неверный пароль";
};

export const useAuthFormState = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target }) =>
    setFormData({ ...formData, [target.name]: target.value });

  const handleSubmit = (callback, e) => {
    e.preventDefault();

    const error = validate(formData);

    if (error) return setFormError(error);

    dispatch(signIn(formData));
    callback();
  };

  return [formData, handleChange, handleSubmit, formError];
};
