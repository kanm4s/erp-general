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
