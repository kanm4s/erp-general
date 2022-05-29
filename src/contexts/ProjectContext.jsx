import { createContext } from "react";

const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const project = [
    {
      name: "Starship Trooper",
      clientName: "ScanBy",
      deadLine: "2022-12-14",
      brief: "jdsf;lkdsjflaksdjf;",
    },
    {
      name: "Starship Trooper",
      clientName: "ScanBy",
      deadLine: "2022-12-14",
      brief: "jdsf;lkdsjflaksdjf;",
    },
    {
      name: "Starship Trooper",
      clientName: "ScanBy",
      deadLine: "2022-12-14",
      brief: "jdsf;lkdsjflaksdjf;",
    },
    {
      name: "Starship Trooper",
      clientName: "ScanBy",
      deadLine: "2022-12-14",
      brief: "jdsf;lkdsjflaksdjf;",
    },
  ];

  return (
    <ProjectContext.Provider value={{ project }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectContextProvider, ProjectContext };
