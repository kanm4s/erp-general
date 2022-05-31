import axios from "../config/axios";

export function getUser() {
  return axios.get("/users");
}

export function loginApi(userName, password) {
  return axios.post("/auths/login", {
    userName,
    password,
  });
}

export function signUpApi(
  firstName,
  lastName,
  userName,
  password,
  confirmPassword,
  phoneNumber,
  email
) {
  return axios.post("/auths/register", {
    firstName,
    lastName,
    userName,
    password,
    confirmPassword,
    phoneNumber,
    email,
  });
}
