import React from "react";

export const Grid = ({ children }) => (
  <div className="grid grid--no-gap">{children}</div>
);

export const GridItem = ({ children }) => (
  <div className="grid__item">{children}</div>
);
