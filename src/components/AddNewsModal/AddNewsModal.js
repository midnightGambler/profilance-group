import React from "react";
import Modal from "react-modal";
import { CloseModalBtn } from "../CloseModalBtn/CloseModalBtn";
import { NewsForm } from "../NewsForm/NewsForm";

export const AddNewsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <CloseModalBtn onClose={onClose} />
      <NewsForm />
    </Modal>
  );
};
