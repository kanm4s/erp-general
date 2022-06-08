import axios from "../config/axios";

export function getEmailByUserApi() {
  return axios.get("/communicates/emails");
}

export function sendEmailApi(emailAddress, subject, content) {
  return axios.post("/communicates/createEmail", {
    emailAddress,
    subject,
    content,
  });
}

export function deleteEmailApi(id) {
  return axios.delete(`/communicates/deleteEmail/${id}`);
}

export function getAllMessage(id) {
  return axios.get(`/communicates/getAllMessage/${id}`);
}

export function sendMessageApi(id, content) {
  return axios.post(`/communicates/sendMessage/${id}`, { content });
}
