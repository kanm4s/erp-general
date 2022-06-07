import { createContext, useContext, useEffect, useState } from "react";
import {
  createProjectApi,
  getAllProjectApi,
  updateProjectApi,
  updateTaskByIdApi,
} from "../api/project";

const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [project, setProject] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const res = await getAllProjectApi();

      setProject(res.data.allProject);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const createProject = async (name, clientName, deadLine, brief) => {
    try {
      await createProjectApi(name, clientName, deadLine, brief);
      await fetchProject();
    } catch (err) {
      console.log(err);
    }
  };

  const updateProject = async (
    name,
    clientName,
    deadLine,
    brief,
    selectProjectId
  ) => {
    try {
      await updateProjectApi(
        name,
        clientName,
        deadLine,
        brief,
        selectProjectId
      );
      await fetchProject();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        project,
        createProject,
        loading,
        updateProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

const useProject = () => {
  const ctx = useContext(ProjectContext);
  return ctx;
};

export { ProjectContextProvider, ProjectContext, useProject };
