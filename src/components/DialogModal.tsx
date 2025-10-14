import { ReactNode } from "react";
import { MdOutlineClose } from "react-icons/md";
import Modal from "react-modal";

interface DialogModalProps {
  title?: string;
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
}

export const DialogModal = ({
  title,
  isOpen,
  closeModal,
  children,
}: DialogModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-gray-100 dark:bg-opacity-50 z-50 transition-all duration-300 ease-in-out"
      className="relative max-w-4xl w-full max-h-full bg-gray-100 dark:bg-gray-900 rounded-lg shadow-xl overflow-y-auto z-60 transition-all duration-300 ease-in-out"
      contentLabel="Example Modal"
      style={{
        content: {
          inset: "auto",
        },
      }}
    >
      <article className="w-full p-4">
        <header className="relative mb-4">
          <h4 className="text-center text-lg lg:text-xl text-gray-900 dark:text-gray-100 font-semibold">
            {title}
          </h4>
          <button
            className="absolute -top-2 -right-2 rounded-md group transition-all duration-300 ease-in-out"
            onClick={closeModal}
          >
            <MdOutlineClose className="text-2xl text-gray-900 dark:text-gray-100 group-hover:text-red-500" />
          </button>
        </header>
        {children}
      </article>
    </Modal>
  );
};
