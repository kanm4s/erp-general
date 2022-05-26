import { createContext, useState } from "react";

const ModalTasks = createContext();

function ModalTaskContext(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <ModalTasks.Provider
      value={{
        showModal,
        handleShowModal,
      }}
    >
      {props.children}
    </ModalTasks.Provider>
  );
}

export { ModalTaskContext, ModalTasks };
