import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import CloseIcon from "../../icons/close.svg";
import { AuthForm } from "../AuthForm/AuthForm";
import { LogoutForm } from "../LogoutForm/LogoutForm";

export const AuthModal = ({ isOpen, onClose }) => {
  const isAuthorized = useSelector(({ auth }) => auth.isAuthorized);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <button onClick={onClose} className="ReactModal__close-btn">
        <CloseIcon width="1rem" height="1rem" fill="#b4b4b4" />
      </button>
      {isAuthorized ? <LogoutForm /> : <AuthForm handleCloseModal={onClose} />}
    </Modal>
  );
};
