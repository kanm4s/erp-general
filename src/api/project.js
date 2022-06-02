import axios from "../config/axios";

export function createProjectApi(name, clientName, deadLine, brief) {
  return axios.post("/projects/createProject", {
    name,
    clientName,
    deadLine,
    brief,
  });
}

export function createTaskApi(name, projectId, deadLine, type, brief) {
  return axios.post(`/projects/createTask/${projectId}`, {
    name,
    deadLine,
    type,
    brief,
  });
}

export function updateTaskByIdApi(name, taskId, deadLine, type, brief) {
  return axios.patch(`/projects/tasks/${taskId}`, {
    name,
    deadLine,
    type,
    brief,
  });
}

export function getTaskById(id) {
  return axios.get(`/projects/tasks/${id}`);
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
