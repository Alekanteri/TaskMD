import React from "react";

import { MdOutlineSettings, MdOutlineClose } from "react-icons/md";

type SettingsProps = {
  children: React.ReactNode;
};

const Settigns: React.FC<SettingsProps> = ({
  children,
}: SettingsProps): JSX.Element => {
  const modalRef = React.useRef<HTMLDialogElement>(null);

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
        <button
          className="absolute top-2 right-2 transition-all bg-secondary-bg-color-light p-2 rounded-full text-primary-text-color-light hover:text-primary-text-color-dark hover:bg-red-color dark:bg-sidebar-bg-color-dark dark:text-primary-text-color-dark dark:hover:bg-red-color"
          onClick={handleCloseModal}
        >
          <MdOutlineClose />
        </button>
        {children}
      </dialog>
      <button
        className="rounded-full p-1 bg-secondary-bg-color-light transition-all text-primary-text-color-light m-4 hover:bg-purple-color hover:text-primary-text-color-dark dark:bg-sidebar-bg-color-dark dark:text-primary-text-color-dark dark:hover:bg-purple-color"
        onClick={handleOpenModal}
      >
        <MdOutlineSettings className="size-6" />
      </button>
    </>
  );
};

export default Settigns;
