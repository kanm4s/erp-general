import axios from "../config/axios";

export function createProjectApi(name, clientName, deadLine, brief) {
  return axios.post("/projects/createProject", {
    name,
    clientName,
    deadLine,
    brief,
  });
}

export function getAllProjectApi() {
  return axios.get("/projects");
}

export function getAllTasksApi() {
  return axios.get("/projects/tasks");
}

export function getTasksByProjectIdApi(projectId) {
  return axios.get(`/projects/${projectId}/tasks`);
}
