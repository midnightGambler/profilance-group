import React from "react";
import cn from "classnames";

export const Button = ({
  children,
  variant = "primary",
  className,
  block,
  ...rest
}) => (
  <button
    {...rest}
    className={cn("button", className, {
      ["button--primary"]: variant === "primary",
      ["button--error"]: variant === "error",
      ["button--block"]: block,
    })}
  >
    {children}
  </button>
);
