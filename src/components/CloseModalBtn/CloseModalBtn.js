import React from "react";
import CloseIcon from "../../icons/close.svg";

export const CloseModalBtn = ({ onClose }) => (
  <button onClick={onClose} className="ReactModal__close-btn">
    <CloseIcon width="1rem" height="1rem" fill="#b4b4b4" />
  </button>
);
