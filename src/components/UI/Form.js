import React from "react";
import cn from "classnames";

export const Form = ({ children, className, ...rest }) => (
  <form className={cn("form", className)} {...rest}>
    {children}
  </form>
);

export const Label = ({ children, className, ...rest }) => (
  <label className={cn(className, "form__label")} {...rest}>
    {children}
  </label>
);

export const FormTitle = ({ children, className, ...rest }) => (
  <h4 className={cn("form__title", className)} {...rest}>
    {children}
  </h4>
);

export const FormGroup = ({ children, className, ...rest }) => (
  <div className={cn("form__group", className)} {...rest}>
    {children}
  </div>
);

export const FormInput = ({ className, ...rest }) => (
  <input className={cn("form__input", className)} {...rest} />
);

export const FormError = ({ className, children, ...rest }) => (
  <span {...rest} className={cn(className, "form__error")}>
    {children}
  </span>
);
