import React from "react";

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
        <button className="absolute top-2 right-2" onClick={handleCloseModal}>
          Close
        </button>
        {children}
      </dialog>
      <button onClick={handleOpenModal}>Open</button>
    </>
  );
};

export default Settigns;
