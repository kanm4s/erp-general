import { createContext, useContext, useEffect, useState } from "react";
import {
  createProjectApi,
  editTaskWorkingStatusById,
  getAllProjectApi,
  getProjectProgressApi,
  getTaskReceiverByUserIdApi,
  updateProjectApi,
} from "../api/project";

const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [project, setProject] = useState([]);
  const [receiveTask, setReceiveTask] = useState([]);
  const [projectProgress, setProjectProgress] = useState([]);

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

  const getTaskReceiverByUserId = async () => {
    try {
      const res = await getTaskReceiverByUserIdApi();
      setReceiveTask(res.data.tasks);
    } catch (err) {
      console.log(err);
    }
  };

  const getProjectProgress = async () => {
    try {
      const res = await getProjectProgressApi();
      setProjectProgress(res.data.allProjectandTask);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProject();
    getTaskReceiverByUserId();
    getProjectProgress();
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

  const updateWorkingStatus = async (id, workingStatus) => {
    try {
      await editTaskWorkingStatusById(id, workingStatus);
      await fetchProject();
      await getProjectProgress();
      await getTaskReceiverByUserId();
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
        updateWorkingStatus,
        receiveTask,
        projectProgress,
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
