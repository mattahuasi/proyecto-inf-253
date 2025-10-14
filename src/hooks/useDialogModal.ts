import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const useDialogModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return { modalIsOpen, openModal, closeModal };
};
