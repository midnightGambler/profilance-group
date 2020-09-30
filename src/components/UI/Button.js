import React from "react";
import cn from "classnames";

export const Button = ({ children, variant = "primary", ...rest }) => (
  <button
    {...rest}
    className={cn("button", {
      ["button--primary"]: variant === "primary",
      ["button--error"]: variant === "error",
    })}
  >
    {children}
  </button>
);
