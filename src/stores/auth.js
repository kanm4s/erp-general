import axios from "axios";
import { setAccessToken } from "../service/localStorage";

export const login = async (userName, password) => {
  try {
    const res = await axios.post("http://localhost:8003/users/login", {
      userName,
      password,
    });
    setAccessToken(res.data.token);
  } catch (err) {
    console.log(err);
  }
};
