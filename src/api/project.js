import axios from "../config/axios";

export function createProjectApi(name, clientName, deadLine, brief) {
  return axios.post("/projects/createProject", {
    name,
    clientName,
    deadLine,
    brief,
  });
}

export function updateProjectApi(name, clientName, deadLine, brief, projectId) {
  return axios.patch(`/projects/${projectId}`, {
    name,
    clientName,
    deadLine,
    brief,
  });
}

export function editTaskWorkingStatusById(id, workingStatus) {
  return axios.patch(`/projects/tasks/wokingStatus/${id}`, { workingStatus });
}

export function addSpecialNoteByIdApi(id, specialNote) {
  return axios.patch(`/projects/tasks/addSpecialNoteById/${id}`, {
    specialNote,
  });
}
export function getSpecialNoteByIdApi(id) {
  return axios.get(`/projects/tasks/addSpecialNoteById/${id}`);
}

export function getAllProjectApi() {
  return axios.get("/projects");
}

export function getProjectProgressApi() {
  return axios.get("/projects/getProjectProgress");
}

export function getProjectByIdApi(id) {
  return axios.get(`/projects/${id}`);
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

export function getAllTasksApi() {
  return axios.get("/projects/tasks");
}

export function getTaskReceiverByUserIdApi() {
  return axios.get("/projects/tasks/getTaskByUserId");
}

export function getTasksByProjectIdApi(projectId) {
  return axios.get(`/projects/${projectId}/tasks`);
}

export function delegateTaskApi(receiverId, taskId) {
  return axios.post("/projects/tasks/delegate", { receiverId, taskId });
}

export function getAvailableTasksApi() {
  return axios.get("projects/tasks/getAvailableTasks");
}
export function getAllWorkingTasksApi() {
  return axios.get("projects/getAllWorkingTasks");
}

export function getProgressDetailByProject() {
  return axios.get("projects/getProgressDetailByProject");
}
