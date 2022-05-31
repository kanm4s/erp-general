import { createContext, useContext } from "react";
import { createProjectApi } from "../api/project";

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

  const createProject = async (name, clientName, deadLine, brief) => {
    try {
      await createProjectApi(name, clientName, deadLine, brief);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProjectContext.Provider value={{ project, createProject }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

const useProject = () => {
  const ctx = useContext(ProjectContext);
  return ctx;
};

export { ProjectContextProvider, ProjectContext, useProject };
