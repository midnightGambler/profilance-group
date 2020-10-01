import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { AuthForm } from "../AuthForm/AuthForm";
import { CloseModalBtn } from "../CloseModalBtn/CloseModalBtn";
import { LogoutForm } from "../LogoutForm/LogoutForm";

export const AuthModal = ({ isOpen, onClose }) => {
  const isAuthorized = useSelector(({ auth }) => auth.isAuthorized);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <CloseModalBtn onClose={onClose} />
      {isAuthorized ? <LogoutForm /> : <AuthForm handleCloseModal={onClose} />}
    </Modal>
  );
};
