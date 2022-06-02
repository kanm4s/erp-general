import { createContext, useContext, useEffect, useState } from "react";
import { createProjectApi, getAllProjectApi } from "../api/project";

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

  return (
    <ProjectContext.Provider value={{ project, createProject, loading }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

const useProject = () => {
  const ctx = useContext(ProjectContext);
  return ctx;
};

export { ProjectContextProvider, ProjectContext, useProject };
