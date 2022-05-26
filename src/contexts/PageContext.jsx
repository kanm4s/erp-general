import { createContext, useState } from "react";

const PageSelect = createContext();

function MainPageContext(props) {
  const [page, setPage] = useState("MAIN");

  const handleShowModal = (page) => {
    setPage(page);
  };

  return (
    <PageSelect.Provider
      value={{
        page,
        setPage,
        handleShowModal,
      }}
    >
      {props.children}
    </PageSelect.Provider>
  );
}

export { MainPageContext, PageSelect };
