import React from "react";
import cn from "classnames";
import LoginIcon from "../../icons/login.svg";

export const AuthBtn = ({
  width = "1rem",
  height = "1rem",
  fill = "#fff",
  className,
  onClick,
  ...rest
}) => {
  return (
    <button onClick={onClick} className={cn("auth-btn", className)}>
      <LoginIcon fill={fill} width={width} height={height} {...rest} />
    </button>
  );
};
