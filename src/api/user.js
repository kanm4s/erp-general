import axios from "../config/axios";

export function getAllUser() {
  return axios.get("/users/allUser");
}

export function getAvailableUserApi() {
  return axios.get("/users/getAvailableUser");
}
