import React from "react";
import cn from "classnames";

export const Container = ({ children, className }) => (
  <div className={cn("container", className)}>{children}</div>
);
