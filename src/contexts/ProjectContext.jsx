import { createContext, useContext, useEffect, useState } from "react";
import { createProjectApi, getAllProjectApi } from "../api/project";

const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [project, setProject] = useState([]);

  const fetchProject = async () => {
    try {
      const res = await getAllProjectApi();

      setProject(res.data.allProject);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);
  // const project = [
  //   {
  //     name: "Starship Trooper",
  //     clientName: "ScanBy",
  //     deadLine: "2022-12-15",
  //     brief: "jdsf;lkdsjflaksdjf;",
  //   },
  //   {
  //     name: "Starship Trooper",
  //     clientName: "ScanBy",
  //     deadLine: "2022-12-14",
  //     brief: "jdsf;lkdsjflaksdjf;",
  //   },
  //   {
  //     name: "Starship Trooper",
  //     clientName: "ScanBy",
  //     deadLine: "2022-12-18",
  //     brief: "jdsf;lkdsjflaksdjf;",
  //   },
  //   {
  //     name: "Starship Trooper",
  //     clientName: "ScanBy",
  //     deadLine: "2022-12-20",
  //     brief: "jdsf;lkdsjflaksdjf;",
  //   },
  // ];

  const createProject = async (name, clientName, deadLine, brief) => {
    try {
      await createProjectApi(name, clientName, deadLine, brief);
      await fetchProject();
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
