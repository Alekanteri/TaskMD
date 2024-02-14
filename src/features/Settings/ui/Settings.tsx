import React from "react";

import { MenuButton } from "./MenuButton";
import { CloseButton } from "./CloseButton";

interface SettingsProps {
  children: React.ReactNode;
}

export type ModalRefType = HTMLDialogElement;

export const Settigns: React.FC<SettingsProps> = ({
  children,
}: SettingsProps): JSX.Element => {
  const modalRef = React.useRef<ModalRefType>(null);

  const handleCloseModal = () => {
    modalRef.current!.close();
    modalRef.current!.style.display = "none";
  };

  const handleOpenModal = () => {
    modalRef.current!.showModal();
    modalRef.current!.style.display = "grid";
  };

  return (
    <>
      <dialog
        ref={modalRef}
        className="relative place-items-center p-4 h-[60%] rounded-lg text-primary-text-color-light bg-primary-bg-color-light dark:text-primary-text-color-dark dark:bg-primary-bg-color-dark"
      >
        <CloseButton onClick={handleCloseModal} />
        {children}
      </dialog>
      <MenuButton onClick={handleOpenModal} />
    </>
  );
};
