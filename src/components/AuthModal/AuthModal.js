import React from "react";
import Modal from "react-modal";
import CloseIcon from "../../icons/close.svg";
import { AuthForm } from "../AuthForm/AuthForm";

export const AuthModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose}>
    <button onClick={onClose} className="ReactModal__close-btn">
      <CloseIcon width="1rem" height="1rem" fill="#b4b4b4" />
    </button>
    <AuthForm />
  </Modal>
);
